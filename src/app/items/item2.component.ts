import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { json } from '../../data';

@Component({
  selector: 'app-item2',
  template: `
    <h2>Async pipe ✅</h2>
    <ng-container *ngFor="let person of data$ | async">
      <h3>{{ person.name }}</h3>
      <p>{{ person.company }} {{ person.email }}</p>
      <hr />
    </ng-container>
  `,
  styles: [],
})
export class Item2Component implements OnInit {
  public data$ = of(json);

  ngOnInit(): void {}
}
