import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: 'cadastro.component.html',
    styleUrls: ['cadastro.component.css']
})
export class CadastroComponent {

    public item = {
        "username": "",
        "fullname": "",
        "password": "",
        "roles": ["USER"]
    };

    public permission: string = "USER";

    constructor(
        private _userService: UserService,
        private _router: Router,
        private _route: ActivatedRoute
    )
    { 
        this._resetFields();
    }


    public save() {

        if (this.permission === 'ADMIN') {
            this.item.roles.push(this.permission);
        }

        this._userService.save(this.item).subscribe(
            () => {
                alert('Salvo com sucesso!');
                this._router.navigate(['/busca'], { relativeTo: this._route });
            },
            () => alert('Problema ao salvar o objeto!')
        );
    }


    private _resetFields() {
        this.item = {
            "username": "",
            "fullname": "",
            "password": "",
            "roles": ["USER"]
        };
        this.permission = 'USER'
    }

}
