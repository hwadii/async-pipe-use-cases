import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { json } from '../../data';

@Component({
  selector: 'app-item4',
  template: `
    <h2>In the controller - Subscribe manually ❌</h2>
    <ng-container *ngFor="let person of data$ | async">
      <h3>{{ person.name }}</h3>
      <p>{{ person.company }} {{ person.email }}</p>
      <button (click)="onClick(person.name)">Send</button>
      <hr />
    </ng-container>
  `,
  styleUrls: ['item.component.css'],
})
export class Item4Component implements OnInit {
  public data$ = of(json);
  public data: typeof json;

  private ngUnsubscribe$ = new Subject<void>();

  public ngOnInit() {
    this.data$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((data) => {
      this.data = data;
    });
  }

  public onClick(name: string) {
    console.log(name);
  }
}
