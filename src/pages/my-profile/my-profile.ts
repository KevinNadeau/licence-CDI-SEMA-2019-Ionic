import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Util } from "../../providers/util/util";
import { User } from "../../models/user";
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
    selector: 'page-my-profile',
    templateUrl: 'my-profile.html',
})

export class MyProfilePage {

    public Util = Util;
    private profile: User = new User();
    private isLoading: boolean = true;

    constructor(public http: HttpProvider, public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        this.isLoading = true;
        this.http.get('my-profile.json').subscribe((profile) => {
            this.isLoading = false;
            this.profile = < User > profile;
        }, (err) => {
            console.error(err);
        });
    }

    doSubmit() {

    }

}