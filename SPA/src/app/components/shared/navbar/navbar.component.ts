import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _heroeService:HeroesService ) { }

  ngOnInit() {
  }

 buscarHeroes( palabra:string ){
       console.log( this._heroeService.buscarHeroes(palabra));
     }

}
