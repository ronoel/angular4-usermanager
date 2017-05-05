import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user.service';

import { UserEntity } from '../services/userEntity';


@Component({
    moduleId: module.id,
    selector: 'busca',
    templateUrl: 'busca.component.html',
    styleUrls: ['busca.component.css']
})
export class BuscaComponent {

    public itemList: UserEntity[];

    public filter: string;
    private _filterSubscription: Subscription;

    constructor(
        private _userService: UserService
    )
    { }

    ngOnInit() {

        this._userService.getAll(this.filter).subscribe(data => this.itemList = data);


    }


    public removeItem(item: any) {
        this._userService.remove(item).subscribe(
            () => {
                alert('Item removido com sucesso!');
                this._userService.getAll(this.filter).subscribe(data => this.itemList = data);
            },
            () => alert('Problema ao remover o item!')
        );
    }

    public search() {

        if (this._filterSubscription) {
            console.log('removeu: ')
            this._filterSubscription.unsubscribe();
        }

        let obs = new Observable(
            (observer) => {
                setTimeout(() => {
                    observer.next();
                }, 500);
            }
        ).switchMap(()=>this._userService.getAll(this.filter));
        this._filterSubscription = obs.subscribe(data => this.itemList = data);
    }

}
