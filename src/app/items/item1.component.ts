import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { json } from '../../data';

@Component({
  selector: 'app-item1',
  template: `
    <h2>Manual subscription ❌</h2>
    <ng-container *ngFor="let person of data">
      <h3>{{ person.name }}</h3>
      <p>{{ person.company }} {{ person.email }}</p>
      <hr />
    </ng-container>
  `,
  styleUrls: ['item.component.css'],
})
export class Item1Component implements OnInit {
  public data$ = of(json);
  public data: typeof json;

  private ngUnsubscribe$ = new Subject<void>();

  ngOnInit() {
    this.data$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((data) => {
      this.data = data;
    });
  }
}
