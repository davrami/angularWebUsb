import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  cardLeo:Object;
  color:String = "red";

  constructor(){
     this.cardLeo = document.getElementById("cardLeo");
     this.cardLeo
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {

  }

  

  


}




