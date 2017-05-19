import { Component } from '@angular/core';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public snackBar: MdSnackBar) {}

  openSnackBar(message, action: string) {
    
    this.snackBar.open(message.srcElement.computedName, action, {
      duration: 2000,
    });
  }
  
}