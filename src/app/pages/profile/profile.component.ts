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
  name: any;

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
    this.getuid();
  }

  async getuid() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userId = user.uid || '';
      } else {
        this.userId = '';
      }
      this.service.getUserDetails(this.userId).then((results) => {
        this.projectId = results.projectId || '';
        this.name = results.name || '';
        this.initForm();
      });
    });
    this.initForm();
  }

  initForm() {
    this.profileForm = this.fb.group({
      name: [this.name, Validators.required],
      projectId: [this.projectId, Validators.required],
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
