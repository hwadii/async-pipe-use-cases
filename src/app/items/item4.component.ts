import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { json } from '../../data';

const batchSubscribeWithAsync = `
    <h2>When you need the value somewhere else</h2>
    <hr />
    <ng-container
      *ngIf="{
        data: data$ | async,
        magicNumber: somethingElse$ | async
      } as stuff"
    >
      <ng-container *ngFor="let person of stuff.data">
        <h3>{{ person.name }}</h3>
        <p>Email: {{ person.email }}</p>
        <p>Company: {{ person.company }}</p>
        <button (click)="clicked(person.name, stuff.magicNumber)">Send</button>
        <hr />
      </ng-container>
    </ng-container>
`;

const pipeStuffInTheObs = `
    <h2>When you need the value somewhere else</h2>
    <hr />
    <ng-container *ngIf="data$ | async as data">
      <ng-container *ngFor="let person of data[0]">
        <h3>{{ person.name }}</h3>
        <p>Email: {{ person.email }}</p>
        <p>Company: {{ person.company }}</p>
        <button (click)="clicked(person.name, data[1])">Send</button>
        <hr />
      </ng-container>
    </ng-container>
`;

const somethingElse$ = of(42);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item4',
  template: batchSubscribeWithAsync,
  // template: pipeStuffInTheObs,
  styleUrls: ['item.component.css'],
})
export class Item4Component implements OnInit {
  // public data$ = of(json).pipe(withLatestFrom(somethingElse$));
  public data$ = of(json);
  public somethingElse$ = somethingElse$;

  public ngOnInit() {}

  public clicked(name: string, magicNumber: number) {
    console.log(`Dispatched: ${name}, ${magicNumber}`);
  }
}
