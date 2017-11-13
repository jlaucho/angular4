import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html'
})
export class HeroeBuscadoComponent implements OnInit {
heroes:Heroe[];
textoBuscado:string;
  constructor( private _heroesService:HeroesService,
               private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( text=>{
      this.textoBuscado = text['texto'];
      this.heroes = this._heroesService.buscarHeroes( this.textoBuscado );
      console.log(this.heroes.length);
    });
  }

}
