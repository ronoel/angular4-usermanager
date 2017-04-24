import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminRole implements CanActivate {

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {

        if (this._authService.getMe()) {
            if(this._authService.isMeInRole('ADMIN')){
                return true;
            }
            return false;
        }

        // not logged in so redirect to login page with the return url
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}