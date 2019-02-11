import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enl-example-ng6-lib',
  template: `
    <p>
      example-ng6-lib works!
    </p>
  `,
  styles: []
})

export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public banaan(){
    console.log('banaan');
  }
}
