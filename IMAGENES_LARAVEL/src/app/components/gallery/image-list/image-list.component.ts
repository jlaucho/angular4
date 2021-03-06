import { Component, OnInit} from '@angular/core';
import { Image } from '../../models/image';
import { ImagesService } from '../../../providers/images.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images:Object;
  selectIma: Image;

  constructor( private _imagesService:ImagesService ) { }

  ngOnInit() {
    this._imagesService.getImages()
      .subscribe( resp =>{
        this.images = resp;
        });
    //this.images = this._imagesService.getImage();
  }

  onSelect(img:Image){
    this.selectIma = img;
    console.log(this.selectIma.thumbnail);
  }

}
