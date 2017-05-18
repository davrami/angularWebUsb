import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//Routing
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

//
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { exampleDemoComponent } from '../components/exampleDemo/exampleDemo.component';
import { WikiComponent } from '../components/wiki/wiki.component';
import { FAQComponent } from '../components/FAQ/FAQ.component';
import { getStartedComponent } from '../components/getStarted/getStarted.component';


import { LEDComponent } from '../components/demos/LED/LED.component';


//AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Hightlightjs
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

//HightCharts
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';


declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    exampleDemoComponent,
    WikiComponent,
    FAQComponent,
    getStartedComponent,
    LEDComponent
    //LEDComponent
  ],
  
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    HighlightJsModule,
    ChartModule,

  ],

  providers: [
    HighlightJsService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
