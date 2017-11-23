import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images:Image[] = [
    new Image('1', 'primera Imagen', 'descripcion de la imagen', './assets/img/image1.jpg', './assets/img/image1-1.jpg'),
    new Image('2', 'primera Imagen', 'descripcion de la imagen', './assets/img/image2.jpg', './assets/img/image2-1.jpg'),
    new Image('3', 'primera Imagen', 'descripcion de la imagen', './assets/img/image3.jpg', './assets/img/image3-1.jpg'),
    new Image('4', 'primera Imagen', 'descripcion de la imagen', './assets/img/image4.jpg', './assets/img/image4-1.jpg'),
    new Image('5', 'primera Imagen', 'descripcion de la imagen', './assets/img/image5.jpg', './assets/img/image5-1.jpg'),
    new Image('6', 'primera Imagen', 'descripcion de la imagen', './assets/img/image6.jpg', './assets/img/image6-1.jpg'),
    new Image('7', 'primera Imagen', 'descripcion de la imagen', './assets/img/image7.jpg', './assets/img/image7-1.jpg'),
    new Image('8', 'primera Imagen', 'descripcion de la imagen', './assets/img/image8.jpg', './assets/img/image8-1.jpg'),
    new Image('9', 'primera Imagen', 'descripcion de la imagen', './assets/img/image9.jpg', './assets/img/image9-1.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
