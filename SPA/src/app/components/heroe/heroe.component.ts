import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor( private acti:ActivatedRoute,
               private _heroeService: HeroesService) { }

  ngOnInit() {
    this.acti.params.subscribe( idx => {
      this.heroe = this._heroeService.obtenerHeroe(idx.id);
      console.log(this.heroe);
    })
  }

}
