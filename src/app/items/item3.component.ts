import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { json } from '../../data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item3',
  template: `
    <ng-container *ngIf="data$ | async as data">
      <div class="item3-content">
        <h2>Async pipe: when you need the result in multiple places</h2>
        <h3>Users: {{ data.length }}</h3>
      </div>
      <hr />
      <ng-container *ngFor="let person of data">
        <h3>{{ person.name }}</h3>
        <p>Email: {{ person.email }}</p>
        <p>Company: {{ person.company }}</p>
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
