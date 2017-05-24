import { Component,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { slideInOutAnimation } from '../assets/animations/fade-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})

export class AppComponent {

  constructor(public snackBar: MdSnackBar) { }
    

  openSnackBar(message, action: string) {
    this.snackBar.open("Trying to connect ...", action, {
      duration: 2000,
    });
  }

}