import { Injectable } from '@angular/core';
import { User } from "../../models/user";

@Injectable()
export class UserProvider {

    private _user: User = new User();

    constructor() {
        console.log('Hello UserProvider Provider');
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
}