import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { json } from '../../data';

const storeData$ = of(json);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item6',
  template: `
    <ng-container *ngIf="data$ | async as data">
      <h2>Concrete example</h2>
      <input [formControl]="search" placeholder="Search..." />
      <button (click)="doShuffle(data)">Shuffle</button>
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
export class Item6Component implements OnInit, OnDestroy {
  public data$ = new BehaviorSubject(json);
  public data: typeof json;
  public search = new FormControl('');

  private ngUnsubscribe$ = new Subject<void>();

  constructor() {}
  ngOnInit() {
    this.search.valueChanges
      .pipe(
        switchMap((search) => {
          return storeData$.pipe(map((data) => this.doFilter(data, search)));
        }),
        takeUntil(this.ngUnsubscribe$),
      ).subscribe(this.data$);
  }

  doFilter(data: typeof json, search: string) {
    return data.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
  }

  doShuffle(data: typeof json) {
    this.data$.next(shuffle(data));
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}

function shuffle<T>(arr: T[]) {
  let j: number;
  let tmp: T;
  for (let i = arr.length - 1; i >= 1; i--) {
    j = Math.floor(Math.random() * i)
    tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}
