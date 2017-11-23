import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../providers/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:any;
  constructor( private _imageService:ImagesService ) { }

  ngOnInit() {
    this._imageService.getImages()
          .subscribe( resp =>{
            return  resp = this.images
          })
  }

}
