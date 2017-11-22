import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImagesService {

  urlBase:string = 'http://localhost/practicas/angular4/REST_BACK/public/index.php/api.rest/v1';
  constructor(private http:Http) { }

  getImages(){
    let url = `${ this.urlBase }/images`;
    return this.http.get( url )
            .map( resp =>{
              return resp.json();
            })
  }
}
