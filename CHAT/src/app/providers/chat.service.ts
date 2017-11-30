import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class ChatService {
//private urlBase:string = 'http://localhost/practicas/angular4/REST_BACK/public/index.php/api.rest/v1/';
private urlBase:string = "http://localhost:99/practicas/angular4/REST_BACK/public/index.php/api.rest/v1/";

items: Observable<any[]>;
  constructor( private http:HttpClient ) {
   }

getMensajes(): Observable<any[]> {
  let url:string = `${this.urlBase}chats`
  return this.items = this.http.get( url )
}

}
