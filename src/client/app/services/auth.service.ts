import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

declare var $: any;

@Injectable()
export class AuthService {

    private _logged_user:any = null;

    private _url = 'http://localhost:8080/decorateste-1.0/rest/auth';

    constructor(private _http: Http, private _cookieService:CookieService) {
    }

    public getMe() {

        return this._logged_user;

        /*
        return this._http.get(this._url + "/me", {withCredentials: true})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => this.handleError(error));
            */
    }

    public isMeInRole(role:string){
        if(this._logged_user){
            return (this._logged_user.roles.indexOf(role) > -1);
        }
        return false;
    }

    login(username: string, password: string) {
        
        this._cookieService.remove("auth-token");

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, withCredentials: true  });

        let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        return this._http.post(this._url + "/login", body.toString(), options)
            .map((response: Response) => {
                this._logged_user = response.json();
                return this._logged_user;
            })
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
