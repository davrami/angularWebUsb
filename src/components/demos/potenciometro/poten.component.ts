import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-poten',
  templateUrl: './poten.template.html',
  styleUrls: ['./poten.style.css'],
})
export class PotenComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { };


  ngAfterViewInit() {
    var o = document.createElement("script");
    o.type = "text/javascript";
    o.src = "../../../assets/js/rainbow/serial.js";
    this.elementRef.nativeElement.appendChild(o);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/js/potenciometro/potenciometro.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}