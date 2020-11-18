import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { json } from '../../data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item2',
  template: `
    <h2>Async pipe</h2>
    <hr />
    <ng-container *ngFor="let person of data$ | async">
      <h3>{{ person.name }}</h3>
      <p>Email: {{ person.email }}</p>
      <p>Company: {{ person.company }}</p>
      <hr />
    </ng-container>
  `,
  styleUrls: ['item.component.css'],
})
export class Item2Component implements OnInit {
  public data$ = of(json);

  ngOnInit(): void {}
}
