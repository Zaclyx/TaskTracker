import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
// import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // KeenThemes mock, change it to:
  defaultAuth: any = {
    email: 'youremail@gmail.com',
    password: 'password',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  loginErrorMessage: string;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SharedService
  ) {
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  // submit() {
  //   this.hasError = false;
  //   const loginSubscr = this.authService
  //     .login(this.f.email.value, this.f.password.value)
  //     .pipe(first())
  //     .subscribe((user: UserModel | undefined) => {
  //       if (user) {
  //         this.router.navigate([this.returnUrl]);
  //       } else {
  //         this.hasError = true;
  //       }
  //     });
  //   this.unsubscribe.push(loginSubscr);
  // }

  // Firebase
  submit() {
    this.hasError = false;
    this.loginErrorMessage = '';
    const loginSubscr = this.authService
      .loginFirebase(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: (user) => {
          if (user && user.emailVerified) {
            this.router.navigate([this.returnUrl]);
          } else if (user && !user.emailVerified) {
            this.hasError = true;
            this.loginErrorMessage =
              'Please verify your email before logging in.';
          } else {
            this.hasError = true;
            this.loginErrorMessage =
              'Login failed. Please check your email and password.';
          }
        },
        error: (err) => {
          this.hasError = true;
          console.error(err);
          alert(`Login failed: ${err.message}`);
        },
      });

    this.unsubscribe.push(loginSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
