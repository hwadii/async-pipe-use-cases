import { Component } from '@angular/core';
import { of } from 'rxjs';
import { json } from '../../data';

@Component({
  selector: 'app-item5',
  template: `
    <h2>In the controller - Auto ✅</h2>
    <ng-container *ngFor="let person of data$ | async">
      <h3>{{ person.name }}</h3>
      <p>{{ person.company }} {{ person.email }}</p>
      <button (click)="onClick(person.name)">Send</button>
      <hr />
    </ng-container>
  `,
  styleUrls: ['item.component.css'],
})
export class Item5Component {
  public data$ = of(json);

  public onClick(name: string) {
    console.log(name);
  }
}
