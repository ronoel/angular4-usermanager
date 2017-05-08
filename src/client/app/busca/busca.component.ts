import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMapTo';

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
    // private _filterSubscription: Subscription;

    constructor(
        private _userService: UserService
    )
    { }

    ngOnInit() {

        this._userService.getAll(this.filter).subscribe(data => this.itemList = data);

        let elem : any = document.getElementById('idFilter');

        Observable.fromEvent(elem,'keyup')
            .map(event => event.target.value )
            .debounceTime(500)
            // .filter(text => text.length >= 3)
            .distinctUntilChanged()
            // .switchMapTo( value => this._userService.getAll(value))
            // .subscribe( data => this.itemList = data,
            //     () => console.log('ERROR'),
            //     () => console.log('COMPLETE')
            // );
            .subscribe( value => this._userService.getAll(value).subscribe(data => this.itemList = data) );

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

        // replaced for Observable.fromEvent

    //     if (this._filterSubscription) {
    //         console.log('removeu: ')
    //         this._filterSubscription.unsubscribe();
    //     }

    //     let obs = new Observable(
    //         (observer) => {
    //             setTimeout(() => {
    //                 observer.next();
    //             }, 500);
    //         }
    //     ).switchMap(()=>this._userService.getAll(this.filter));
    //     this._filterSubscription = obs.subscribe(data => this.itemList = data);
    }

}
