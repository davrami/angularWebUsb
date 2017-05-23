import { Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { exampleDemoComponent } from '../components/exampleDemo/exampleDemo.component';
import { WikiComponent } from '../components/wiki/wiki.component';
import { FAQComponent } from '../components/FAQ/FAQ.component';
import { getStartedComponent } from '../components/getStarted/getStarted.component';
import { LEDComponent } from '../components/demos/LED/LED.component';
import { PotenComponent } from '../components/demos/potenciometro/poten.component';
import { SandboxComponent } from '../components/demos/sandbox/sandbox.component';
import { PongComponent } from '../components/demos/pong/pong.component';
import { LCDComponent } from '../components/demos/LCD/LCD.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'example', component: exampleDemoComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'getStarted', component: getStartedComponent },
  { path: 'LED', component: LEDComponent },
  { path: 'poten', component: PotenComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'pong', component: PongComponent },
  { path: 'LCD', component: LCDComponent }

];