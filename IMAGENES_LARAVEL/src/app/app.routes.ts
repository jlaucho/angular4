import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'acerca', component:  AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'gallery' }
];

export const app_routing = RouterModule.forRoot(app_routes);
