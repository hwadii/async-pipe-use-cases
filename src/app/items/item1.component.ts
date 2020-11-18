import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, of, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { json } from '../../data';

@Component({
  selector: 'app-item1',
  template: `
    <h2>Manual subscription</h2>
    <hr />
    <ng-container *ngFor="let person of data">
    <h3>{{ person.name }}</h3>
    <p>Email: {{ person.email }}</p>
    <p>Company: {{ person.company }}</p>
    <hr />
    </ng-container>
  `,
  styleUrls: ['item.component.css'],
})
export class Item1Component implements OnInit, OnDestroy {
  public data$ = of(json);
  public data: typeof json;

  private ngUnsubscribe$ = new Subject<void>();

  ngOnInit() {
    this.data$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((data) => {
      this.data = data;
    });

    // You don't need to unsubscribe from each inner observable
    // because you subscribed only once.
    combineLatest([this.data$, timer(1000, 2000)])
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(console.log);
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
