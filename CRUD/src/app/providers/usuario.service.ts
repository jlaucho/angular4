import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UsuarioService {
  usuarios:any;
  //urlUsers = 'http://localhost/practicas/angular4/REST_BACK/public/index.php/api.rest/user';
  urlUsers:string = 'http://localhost:99/practicas/angular4/REST_BACK/public/index.php/api.rest/v1/user';
  constructor( private http: Http ) { }

  getUsuarios(){
    return this.http.get( this.urlUsers )
      .map( data => data.json())
  }

  getUsuario( idx:number ){
    let url = `${ this.urlUsers }/${ idx }`;
    return this.http.get( url )
      .map( resp =>resp.json())
  }

  guardarUsuario( usuario:any){

    const headers = new Headers();
          headers.append('Content-Type', 'application/json');
    let body = JSON.stringify( usuario );
    //let body = usuario;
    console.log(body);
    return this.http.post( this.urlUsers, body, {headers})
              .map( resp => {
                //console.log(resp);
                return resp;
              })
  }

  eliminarUsuario( id:number ){
    let url = `${ this.urlUsers }/${ id }`;
    return this.http.delete( url )
                //.map( resp =>resp.json())
                .map( resp =>resp )
  }

  actualizarUsuario( usuario:any, id:number ){
    const headers = new Headers();
          headers.append('Content-Type', 'application/json');
    let body = JSON.stringify( usuario );
    let url = `${ this.urlUsers }/${ id }`;
    //console.log(url);
    return this.http.put( url, body, { headers:headers })
                .map( resp => resp.ok)

  }
}
