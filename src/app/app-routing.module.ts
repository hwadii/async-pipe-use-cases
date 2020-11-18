import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Item0Component } from './items/item0.component';
import { Item1Component } from './items/item1.component';
import { Item2Component } from './items/item2.component';
import { Item3Component } from './items/item3.component';
import { Item4Component } from './items/item4.component';
import { Item5Component } from './items/item5.component';
import { Item6Component } from './items/item6.component';

const routes: Routes = [
  { path: '0', component: Item0Component },
  { path: '1', component: Item1Component },
  { path: '2', component: Item2Component },
  { path: '3', component: Item3Component },
  { path: '4', component: Item4Component },
  { path: '5', component: Item5Component },
  { path: '6', component: Item6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
