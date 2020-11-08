import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Item1Component } from './items/item1.component';
import { Item2Component } from './items/item2.component';
import { Item3Component } from './items/item3.component';
import { Item4Component } from './items/item4.component';
import { Item5Component } from './items/item5.component';

const routes: Routes = [
  { path: 'item1', component: Item1Component },
  { path: 'item2', component: Item2Component },
  { path: 'item3', component: Item3Component },
  { path: 'item4', component: Item4Component },
  { path: 'item5', component: Item5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
