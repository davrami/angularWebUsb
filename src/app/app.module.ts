import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Hightlightjs
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';


//Routing
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

//Content
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { exampleDemoComponent } from '../components/exampleDemo/exampleDemo.component';
import { WikiComponent } from '../components/wiki/wiki.component';
import { FAQComponent } from '../components/FAQ/FAQ.component';
import { getStartedComponent } from '../components/getStarted/getStarted.component';

//Demos
import { LEDComponent } from '../components/demos/LED/LED.component';
import { PotenComponent } from '../components/demos/potenciometro/poten.component';
import { SandboxComponent } from '../components/demos/sandbox/sandbox.component';
import { PongComponent } from '../components/demos/pong/pong.component';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, exampleDemoComponent, WikiComponent, FAQComponent,
    getStartedComponent, LEDComponent, PotenComponent, SandboxComponent, PongComponent
  ],

  imports: [
    RouterModule.forRoot(routes), BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule, MaterialModule,
    HighlightJsModule, ReactiveFormsModule

  ],

  providers: [
    HighlightJsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
