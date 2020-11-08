import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { json } from '../../data';

@Component({
  selector: 'app-item3',
  template: `
    <ng-container *ngIf="data$ | async as data">
      <div class="item3-content">
        <h2>Async pipe multiple ✅</h2>
        <div>Users: {{ data.length }}</div>
      </div>
      <ng-container *ngFor="let person of data">
        <h3>{{ person.name }}</h3>
        <p>{{ person.company }} {{ person.email }}</p>
        <hr />
      </ng-container>
    </ng-container>
  `,
  styleUrls: ['item.component.css'],
})
export class Item3Component implements OnInit {
  public data$ = of(json);

  ngOnInit(): void {}
}
