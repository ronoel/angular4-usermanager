import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    public username: string = "";
    public password: string = "";

    constructor(
        private _authService: AuthService,
        private _router: Router,
        private _route: ActivatedRoute
    )
    { }

    public login() {
        console.log('LOGIN');

        this._authService.login(this.username, this.password).subscribe(
            (user) => {
                console.log(user);
                this._router.navigate(['/'], { relativeTo: this._route });
            },
            () => alert("Login ou senha invalido!"),
        );
    }

}
