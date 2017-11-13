import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[];
  constructor( private _heroeService:HeroesService,
               private router:Router) { }

  ngOnInit() {
    this.heroes = this._heroeService.tomarHeroes();
    //console.log(this.heroes);
  }
  mostrarHeroe(id:number){
    this.router.navigate(['/heroe', id]);
    //console.log(id);
  }

}
