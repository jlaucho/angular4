import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas

import { APP_ROUTING } from './app.routes';

//Servicios

import { HeroesService } from './services/heroes.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeBuscadoComponent } from './components/heroe-buscado/heroe-buscado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AcercaComponent,
    HeroeComponent,
    HeroeBuscadoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
