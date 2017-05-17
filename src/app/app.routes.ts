import { Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { exampleDemoComponent } from '../components/exampleDemo/exampleDemo.component';
import { WikiComponent } from '../components/wiki/wiki.component';
import { FAQComponent } from '../components/FAQ/FAQ.component';
import { getStartedComponent } from '../components/getStarted/getStarted.component';
import { LEDComponent } from '../components/demos/LED/LED.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'example', component: exampleDemoComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'getStarted', component: getStartedComponent },
  { path: 'LED', component: LEDComponent },
];