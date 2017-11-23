import { Component, OnInit} from '@angular/core';
import { Image } from '../../models/image';
import { ImagesService } from '../../../providers/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  selectIma: Image;

  constructor( private _imagesService:ImagesService ) { }

  ngOnInit() {
    this.images = this._imagesService.getImage();
  }

  onSelect(img:Image){
    this.selectIma = img;
    console.log(this.selectIma.thumbnail);
  }

}
