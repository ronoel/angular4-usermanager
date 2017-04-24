import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private _url = 'http://localhost:8080/decorateste-1.0/rest/user';

    constructor(private _http: Http) {
    }

    public getBaseUrl() {
        return this._url;
    }

    getAll() {

        return this._http.get(this._url,{ withCredentials: true })
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => this.handleError(error));
    }

    save(produto: any) {
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

    remove(item: any) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this._http.delete(this._url + "/" + item.username, options)
            .catch((error: any) => this.handleError(error));
    }

    get(id: number) {
        return this._http.get(this._url + "/" + id, {withCredentials: true})
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
