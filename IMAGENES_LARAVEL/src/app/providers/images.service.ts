import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Image } from '../components/models/image';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImagesService {
  images:Image[];/* = [
    new Image('1', 'primera Imagen', 'descripcion de la imagen', './assets/img/image1.jpg', './assets/img/image1-1.jpg'),
    new Image('2', 'primera Imagen', 'descripcion de la imagen', './assets/img/image2.jpg', './assets/img/image2-1.jpg'),
    new Image('3', 'primera Imagen', 'descripcion de la imagen', './assets/img/image3.jpg', './assets/img/image3-1.jpg'),
    new Image('4', 'primera Imagen', 'descripcion de la imagen', './assets/img/image4.jpg', './assets/img/image4-1.jpg'),
    new Image('5', 'primera Imagen', 'descripcion de la imagen', './assets/img/image5.jpg', './assets/img/image5-1.jpg'),
    new Image('6', 'primera Imagen', 'descripcion de la imagen', './assets/img/image6.jpg', './assets/img/image6-1.jpg'),
    new Image('7', 'primera Imagen', 'descripcion de la imagen', './assets/img/image7.jpg', './assets/img/image7-1.jpg'),
    new Image('8', 'primera Imagen', 'descripcion de la imagen', './assets/img/image8.jpg', './assets/img/image8-1.jpg'),
    new Image('9', 'primera Imagen', 'descripcion de la imagen', './assets/img/image9.jpg', './assets/img/image9-1.jpg')
  ]*/

  //urlBase:string = 'http://localhost/practicas/angular4/REST_BACK/public/index.php/api.rest/v1';
  urlBase:string = 'http://localhost:99/practicas/angular4/REST_BACK/public/index.php/api.rest/v1';
  constructor(private http:Http) {
   }
//estas son para las estaticas
   getImage(){
     return this.images;
   }
//esta son para laravel
  getImages():Observable<Image[]>{
    let url = `${ this.urlBase }/images`;
    return this.http.get( url )
            .map(resp =>{
              this.images =  resp.json();
            })
  }
}
