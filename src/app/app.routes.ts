import { Routes } from '@angular/router';

import { AboutComponent } from '../components/about.component';
import { HomeComponent } from '../components/home.component';
import { exampleDemoComponent } from '../components/exampleDemo/exampleDemo.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'example', component: exampleDemoComponent }
];