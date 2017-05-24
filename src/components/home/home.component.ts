import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { slideInOutAnimation } from '../../assets/animations/fade-in.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class HomeComponent implements OnInit, AfterViewInit {

  cardLeo: Object;
  color: String = "red";

  constructor() {
    this.cardLeo = document.getElementById("cardLeo");
    this.cardLeo
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}




