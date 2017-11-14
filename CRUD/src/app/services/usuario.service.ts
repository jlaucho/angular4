import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UsuarioService {
  usuarios:any;
  urlUsers = 'http://localhost/practicas/angular4/REST_BACK/public/index.php/api.rest/user';

  constructor( private http: Http ) { }

  getUsuarios(){

    return this.http.get( this.urlUsers )
      .map( data => data.json())
  }

}
