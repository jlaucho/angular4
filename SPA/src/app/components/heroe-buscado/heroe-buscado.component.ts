import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html'
})
export class HeroeBuscadoComponent implements OnInit {
encontrados:Heroe[];
  constructor( private _heroesService:HeroesService,
               private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( text=>{
      let textoBuscado:string = text['texto'];
      this.encontrados = this._heroesService.buscarHeroes( textoBuscado );
      console.log(this.encontrados);
    });
  }

}
