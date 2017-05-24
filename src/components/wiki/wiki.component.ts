import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../assets/animations/fade-in.animation';


@Component({
  selector: 'app-wiki',
  styleUrls: ['./wiki.style.css'],
  templateUrl: './wiki.template.html',
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class WikiComponent { }
