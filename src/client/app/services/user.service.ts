import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Config } from '../shared/config/env.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/from';

import { UserEntity } from './userEntity';


@Injectable()
export class UserService {

    private _url: string;

    constructor(private _http: Http) {

        this._url = Config.API + '/user';
    }

    public getBaseUrl() {
        return this._url;
    }

    getAll(filter: string): Observable<UserEntity[]> {

        let requestURL = this._url;

        if (filter && filter.length > 0) {

            let params: URLSearchParams = new URLSearchParams();
            params.set('textsearch', filter);

            requestURL += '?' + params;
        }

        return this._http.get(requestURL, { withCredentials: true })
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => this.handleError(error));

        // return this._http.get(this._url,{ withCredentials: true, search: params })
        //     .map((response: Response) => {
        //         return response.json();
        //     })
        //     .concatMap(array => Observable.from(array))
        //     .filter(
        //         (data:any) => {

        //           //  console.log('Filtro: ');
        //          //   console.log(data);
        //         //    console.log('FiltroEND');
        //             if(filter==null||filter.length==0){
        //                 return true;
        //             }

        //             let filterU = filter.toUpperCase();

        //             if(data.username.toUpperCase().includes(filterU) || data.fullname.toUpperCase().includes(filterU)) {
        //                 return true;
        //             }
        //             return false;
        //         }
        //      ).toArray()
        //     .catch((error: any) => this.handleError(error));
    }

    save(produto: UserEntity) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this._http.post(this._url, produto, options).catch((error: any) => this.handleError(error));
    }

    /*
        update(produto: any) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
    
            return this._http.put(this._url, produto, options)
                .map(data => {
                    this._messageService.sendMessage(
                        MessageService.TYPE_SUCCESS,
                        "Atualizado com sucesso!",
                        null
                    );
                    return data;
                })
                .catch((error: any) => this.handleError(error));
        }*/

    remove(item: UserEntity) {

        return this._http.delete(this._url + "/" + item.username, { withCredentials: true })
            .catch((error: any) => this.handleError(error));
    }

    get(id: number): Observable<UserEntity> {
        return this._http.get(this._url + "/" + id, { withCredentials: true })
            .map((response: Response) => response.json())
            .catch((error: any) => this.handleError(error));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    public handleError(error: Response | any) {

        let errMsg: string;
        errMsg = 'PROBLEMA';
        /*
        if (error instanceof Response) {

            if (error.status === 500 && error._body && error._body.length < 100) {
                this._messageService.sendMessage(MessageService.TYPE_ERROR, null, error._body);
            } else {
                this._messageService.sendMessage(MessageService.TYPE_ERROR, "Problema!!!", "Não foi possível realizar a operação.");
            }
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

        } else {
            this._messageService.sendMessage(MessageService.TYPE_ERROR, "Problema!!!", "Não foi possível realizar a operação.");
            errMsg = error.message ? error.message : error.toString();
        }*/

        return Observable.throw(errMsg);
    }
}
