import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Directive({
    selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
    @Input('hasPermission') permission: string;

    constructor(
        private _el: ElementRef,
        private _authService: AuthService) { }

    ngOnInit() {
        if (!this._authService.isMeInRole(this.permission)) {
            this._el.nativeElement.style.display = 'none';
        }
    }

    

}
