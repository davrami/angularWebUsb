import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../assets/animations/fade-in.animation';

@Component({
  selector: 'app-about',
  styleUrls: ['./about.style.css'],
  templateUrl: './about.template.html',
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class AboutComponent { }
