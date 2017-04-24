import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'busca',
    templateUrl: 'busca.component.html',
    styleUrls: ['busca.component.css']
})
export class BuscaComponent {

    public itemList: Array<any>;

    constructor(
        private _userService: UserService
    )
    { }

    ngOnInit() {

        this._userService.getAll().subscribe(data => this.itemList = data);

    }


    public removeItem(item:any){
        this._userService.remove(item).subscribe(
            ()=> {
                alert('Item removido com sucesso!');
                this._userService.getAll().subscribe(data => this.itemList = data);
            },
            ()=>alert('Problema ao remover o item!')
        );
    }


}
