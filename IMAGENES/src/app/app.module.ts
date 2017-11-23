import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { app_routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';

//services
import { ImagesService } from './providers/images.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/gallery/image-list/image.component';
import { ImageListComponent } from './components/gallery/image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
