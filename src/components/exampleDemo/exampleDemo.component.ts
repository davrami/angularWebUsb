
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'exampleDemo',
  templateUrl: './exampleDemo.html',
  styleUrls: ['./exampleDemo.css'],

})

export class exampleDemoComponent implements OnInit, AfterViewInit {
  

  constructor(private highlightJsService: HighlightJsService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
  }

  highlightByService(target: ElementRef) {
    this.highlightJsService.highlight(target);
  }

    
  sampleContent = `
         <pre>
            <code class="typescript highlight">
                class Greeter {
                    constructor(public greeting: string) { }
                    greet() {
                        return "hello world";
                    }
                };
            </code>
        </pre>
        <pre>
            <code class="javascript highlight">
                alert('Hello, World!');
            </code>
        </pre>
        `;
    }



