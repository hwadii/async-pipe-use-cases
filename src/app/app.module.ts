import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Item1Component } from './items/item1.component';
import { Item2Component } from './items/item2.component';
import { Item3Component } from './items/item3.component';
import { Item4Component } from './items/item4.component';
import { Item5Component } from './items/item5.component';
import { Item0Component } from './items/item0.component';

@NgModule({
  declarations: [
    AppComponent,
    Item0Component,
    Item1Component,
    Item2Component,
    Item3Component,
    Item4Component,
    Item5Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
