import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-horizontal',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  profileForm: FormGroup;
  userId: string;
  userName: any;
  projectId: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private service: SharedService
  ) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      projectId: ['', Validators.required],
    });
    this.auth.authState.subscribe(async (user) => {
      this.userId = user!.uid;
    });
  }

  saveSettings() {
    this.isLoading$.next(true);
    if (this.profileForm.valid) {
      const profileFormData = this.profileForm.value;
      this.service.profileUpdate(this.userId, profileFormData);
    }
    setTimeout(() => {
      this.isLoading$.next(false);
      alert('Successfully saved!');
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
