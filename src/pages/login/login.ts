import { User } from "../../models/user";
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserProvider } from "../../providers/user/user";
import { HttpProvider } from "../../providers/http/http";
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {

    // Cette variable nous permets de pre-remplire les formulaire de login ou register. Voir la class User
    account: User = new User();
    loginErrorString: string; // Message d'erreur de connection
    registerErrorString: string; // Message d'erreur d'inscription
    opt: string = 'signin'; // voir code html (lgn: 9 - value="signin")

    constructor(
        public http: HttpProvider,
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public userProvider: UserProvider,
        public translateService: TranslateService
    ) {
        this.menuCtrl.enable(false); // Cacher le menu se trouvant sur la gauche (dans la page main.html)
        // Traduction du message d'erreur
        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        })
    }


    // Mode de connection avec le fichier my-profile.json
    doLogin_v1() {
        this.http.get('my-profile.json').subscribe(
            (profile: User) => { // Requet asyn. sur le fichier my-profile.json qui ce situe dans asset mocks et le contenu du fichier est mise dans la variable profile

                this.userProvider.user = < User > profile; // Ajout du profile user dans la class UserProvider grace au setter. Grace a sa, nous pouvont recuperer le profile à tout moments vu qu'il est stocker dans la class UserProvider

                /*
                    if( users.email === this.account.email && users.password === this.account.password )
                        return true;
                    else
                        return false;
                */
                let isGood = (profile.email === this.account.email && profile.password === this.account.password) ? true : false

                if (isGood)
                    this.navCtrl.setRoot('ListFriendsPage'); // setRoot -> permet de supprimer toutes les vues de la stack et de naviguer vers la root page.

                else {
                    this.account.email = 'mike.sylvestre@lyknowledge.io';
                    this.account.password = 'themike';
                    this.translateService.get('LOGIN_ERROR').subscribe((value) => { // translateService permet d'effectuer du multi-langue.
                        // subscribe -> concept des PROMISE - OBSERVABLE, le traitement ce fait de manier asynch.
                        this.loginErrorString = value; // Affichage du message d'erreur dans la page html via la variable "loginErrorString"
                    })
                }
                // navCtrl -> Permmet de naviger sur plusieurs page
            });
    }

    doLogin() {
        this.userProvider.loginUser(this.account.email, this.account.password).then(
            isConnect => {
                if (isConnect)
                    this.navCtrl.setRoot('ListFriendsPage'); // setRoot -> permet de supprimer toutes les vues de la stack et de naviguer vers la root page.
                else
                    this.loginErrorString = "Coonnection error";
            }
        )
    }

    doRegister() {
        this.userProvider.registerUser(this.account).then(
            isConnect => {
                if (isConnect)
                    this.navCtrl.setRoot('ListFriendsPage'); // setRoot -> permet de supprimer toutes les vues de la stack et de naviguer vers la root page.
                else
                    this.loginErrorString = "Coonnection error";
            }
        )
    }
}