import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table-data',
  template:
    '<table border="1">' +
    '<th>Name</th>' +
    '<th>Number</th>' +
    '<tr>' +
    '<td>Attapon</td>' +
    '<td>10</td>' +
    '</tr>' +
    '<tr>' +
    '<td>Attapon</td>' +
    '<td>10</td>' +
    '</tr>' +
    '<tr>' +
    '<td>Attapon</td>' +
    '<td>10</td>' +
    '</tr>' +
    '<tr>' +
    '<td>Attapon</td>' +
    '<td>10</td>' +
    '</tr>' +
    '</table>',
  styles: [

  ]
})
export class TableDataComponent { }
