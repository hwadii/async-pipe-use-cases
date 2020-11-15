import { Component } from '@angular/core';

@Component({
  selector: 'async-promise-pipe',
  template: `<div>
    <code>promise | async</code>:
    <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <br />
    <span>Wait for it... {{ greeting | async }}</span>
  </div>`,
})
export class Item0Component {
  greeting: Promise<string> | null = null;
  arrived: boolean = false;

  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve('hi there!');
      this.arrived = true;
    }
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve) => {
      this.resolve = resolve;
    });
  }
}
