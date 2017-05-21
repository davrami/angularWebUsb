
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';

/**Form */
import { FormControl, Validators } from '@angular/forms';
let max = 5;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/**Form */


@Component({
  selector: 'exampleDemo',
  templateUrl: './exampleDemo.html',
  styleUrls: ['./exampleDemo.css'],

})

export class exampleDemoComponent implements OnInit, AfterViewInit {

  c = 0;

  constructor(private highlightJsService: HighlightJsService) {
  }


  ngOnInit() {
    /**
     * Call to add a point in Chart
     */
  }


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

/**################### Form Example ###################### */


  floatingLabel: string = 'auto';
  color: boolean;
  requiredField: boolean;
  hideRequiredMarker: boolean;
  ctrlDisabled = false;

  name: string;
  errorMessageExample1: string;
  errorMessageExample2: string;
  errorMessageExample3: string;
  items: any[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
  ];
  rows = 8;
  formControl = new FormControl('hello', Validators.required);
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  model = 'hello';

  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({ value: ++max });
    }
  }


}

