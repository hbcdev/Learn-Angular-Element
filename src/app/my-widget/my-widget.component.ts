import { Component, OnInit, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-widget',
  template:
    '<h1>Hello My widget.. </h1><span>Number {{number}}</span>' +
    '<button (click)="increment()">increment </button>',
  styles: [
    'h1:{color:red;}'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class MyWidgetComponent {

  @Input() number = 0;
  @Output() change = new EventEmitter();


  increment() {
    ++this.number;
    this.change.emit(this.number);
  }


}
