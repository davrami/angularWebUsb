
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'exampleDemo',
  templateUrl: './exampleDemo.html',
  styleUrls: ['./exampleDemo.css'],

})

export class exampleDemoComponent implements OnInit, AfterViewInit {

  c = 0;

  constructor(private highlightJsService: HighlightJsService) {

    this.options = {

      title: { text: 'angular2-highcharts example' },

      series: [{
        name: 's1',
        data: [0],
        allowPointSelect: false
      }, {
        name: 's2',
        data: [0],
        allowPointSelect: false
      }]
    };
  }
  options: any;
  chart: any;
  count: any;
  saveChart(chart) {
    this.chart = chart;
  }

  addPoint() {
    this.chart.series[0].addPoint(Math.random() * 10);
    this.chart.series[1].addPoint(Math.random() * -10);
    this.c++;
    
    if (this.c > 10){
      this.chart.series[0].data[0].remove();
      this.chart.series[1].data[0].remove();
    }
  }


  reset() {
    this.chart.series[0].setData([]);
    this.chart.series[1].setData([]);
  }
  start() {
    
  }

  onPointSelect(point) {
    alert(`${point.y} is selected`);
  }
  onSeriesHide(series) {
    alert(`${series.name} is selected`);
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
}

