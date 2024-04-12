import { ChangeDetectorRef, Component } from '@angular/core';
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
  userName: string;
  projectId: string;
  projectName: string;
  projectExist: boolean;
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
    this.isLoading$.next(true);
    this.getuid();
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.profileForm.controls;
  }

  getuid() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userId = user.uid || '';
      } else {
        this.userId = '';
      }
      this.service.getUserDetails(this.userId).then((results) => {
        this.name = results[0]?.name || '';
        this.projectId = results[0]?.projectId || '';
        this.projectName = results[1]?.projectName || '';
        this.projectExist = !!!results[1]?.projectname;
        this.initForm();
        this.isLoading$.next(false);
        this.cdr.detectChanges();
      });
    });
  }

  initForm() {
    this.profileForm = this.fb.group({
      name: [this.name, Validators.required],
      projectId: [this.projectId, Validators.required],
      projectName: [{value: this.projectName, disabled: this.projectExist || false}, Validators.required]
    });
  }

  handleInputChange(event: Event) {
    this.projectName = '';
    this.profileForm.patchValue({
      projectName: this.projectName
    });
    this.profileForm.get('projectName')?.enable({onlySelf: true});
    this.projectExist = false;
    this.service.getProjectDetails((event.target as HTMLInputElement).value).then((results) => {
      if (results) {
        this.projectName = results.projectName || '';
        this.projectExist = !!results.projectName;
        this.profileForm.patchValue({
          projectName: this.projectName
        });
        this.profileForm.get('projectName')?.disable({onlySelf: this.projectExist});
        this.cdr.detectChanges();
      }
    });
  }

  saveSettings() {
    this.isLoading$.next(true);
    if (this.profileForm.valid) {
      const profileFormData = this.profileForm.value;
      this.service.profileUpdate(this.userId, this.projectExist, profileFormData);
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
