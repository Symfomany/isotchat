import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Message } from '../interfaces/Message';

@Injectable()
export class UsersService {

    private tchatUrl = 'datas/tchat.json'; // URL to JSON file


    public constructor(private http: Http) { }

    /**
     * 
     * Get All data from JSON
     * 
     * @returns {Observable<Message>}
     * 
     * @memberOf UsersService
     */
    public getAll(): Observable<Message> {
        return this.http.get(this.tchatUrl)
            .map(this.extractData)
            .catch(this.handleError);

    }

    /**
     * Handle JSON datas
     * 
     * @private
     * @param {Response} res
     * @returns
     * 
     * @memberOf UsersService
     */
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    /**
     * Handle Exception error
     * 
     * @private
     * @param {(Response | any)} error
     * @returns
     * 
     * @memberOf UsersService
     */
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}