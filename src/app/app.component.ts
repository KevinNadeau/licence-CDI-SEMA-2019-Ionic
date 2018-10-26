import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import {UserProvider} from "../providers/user/user";

@Component({
  templateUrl: 'main.html'
})
export class MyApp {
  rootPage = FirstRunPage; // Page de lancement par default

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { icon: 'contacts', title: 'Friends', component: 'ListFriendsPage' },
    { icon: 'contact', title: 'My Profile', component: 'MyProfilePage' },
    { icon: 'log-out', title: 'Logout', component: 'LoginPage' }
  ];

  constructor(
    private config: Config, 
    private platform: Platform, 
    private statusBar: StatusBar, 
    private userProvider: UserProvider, 
    private splashScreen: SplashScreen,
    private translate: TranslateService
  ) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    this.translate.setDefaultLang('fr'); // Par defaul, la langue sera en Fr
    const browserLang = this.translate.getBrowserLang(); // Recuperation de la langue du navigateur - Il renvoie la première langue du navigateur par défaut.
    if (browserLang !== 'fr') // Si la langue n'ai pas francais alors
      this.translate.use('en'); // Chargement de la langue En
    
    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT); // Definition d'une variable si nous somme sur IOS dont la key sera 'backButtonText' et la valeur BACK_BUTTON_TEXT (voir fichier json dans le dossier i18n)
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component); // setRoot - Permet de d'afficher une page mais aussi de definir cet meme page, comme page par default
  }
}
