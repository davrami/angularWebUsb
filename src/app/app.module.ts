import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//Routing
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
//
import { AboutComponent } from '../components/about.component';
import { HomeComponent } from '../components/home.component';
import { exampleDemoComponent } from '../components/exampleDemo/exampleDemo.component';


//AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    exampleDemoComponent
  ],
  
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
