import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../providers/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _imagenService: ImagesService ) { }

  ngOnInit() {
    //this._imagenService.getImages()
        //.subscribe( resp => console.log(resp));
  }

}
