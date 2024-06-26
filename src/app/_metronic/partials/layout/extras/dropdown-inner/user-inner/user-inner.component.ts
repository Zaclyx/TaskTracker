import { ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TranslationService } from '../../../../../../modules/i18n';
import { AuthService, UserType } from '../../../../../../modules/auth';
import { SharedService } from 'src/app/shared.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-user-inner',
  templateUrl: './user-inner.component.html',
})
export class UserInnerComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  class = `menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px`;
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  language: LanguageFlag;
  user: any;
  uid: string;
  langs = languages;
  private unsubscribe: Subscription[] = [];

  constructor(
    private auth: AuthService,
    private translationService: TranslationService,
    private service: SharedService,
    private cdr: ChangeDetectorRef,
    private afa: AngularFireAuth
  ) {
    this.service.sharedSubjectName$.subscribe((name: string) => {
      if (this.user != undefined) {
        this.user.name = name;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit(): void {
    this.setLanguage(this.translationService.getSelectedLanguage());
    this.getUid();
  }

  getUid() {
    this.afa.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid || '';
      } else {
        this.uid = '';
      }
      this.service.getUserDetails(this.uid).then((results) => {
        if (results[0] != undefined) {
          this.user = results[0];
          this.user.lastLogin = this.user.lastLogin.toDate();
        }
        this.updateLastLogin();
      });
    });
  }

  updateLastLogin() {
    this.service.updateLastLogin(this.uid);
  }

  logout() {
    this.auth.logoutFirebase();
    document.location.reload();
  }

  selectLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.setLanguage(lang);
  }

  setLanguage(lang: string) {
    this.langs.forEach((language: LanguageFlag) => {
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

const languages = [
  {
    lang: 'en',
    name: 'English',
    flag: './assets/media/flags/united-states.svg',
  },
  {
    lang: 'zh',
    name: 'Mandarin',
    flag: './assets/media/flags/china.svg',
  },
  {
    lang: 'es',
    name: 'Spanish',
    flag: './assets/media/flags/spain.svg',
  },
  {
    lang: 'ja',
    name: 'Japanese',
    flag: './assets/media/flags/japan.svg',
  },
  {
    lang: 'de',
    name: 'German',
    flag: './assets/media/flags/germany.svg',
  },
  {
    lang: 'fr',
    name: 'French',
    flag: './assets/media/flags/france.svg',
  },
];
