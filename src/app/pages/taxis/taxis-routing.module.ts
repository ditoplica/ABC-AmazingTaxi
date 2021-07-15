import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaxisComponent} from './taxis.component';

const routes: Routes = [
  {
    path: '',
    component: TaxisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisRoutingModule { }
