import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeBuscadoComponent } from './components/heroe-buscado/heroe-buscado.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'algo/:texto', component: HeroeBuscadoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
