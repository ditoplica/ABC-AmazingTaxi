import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserHistory1Component} from './user-history1.component';

const routes: Routes = [
  {
    path: '',
    component: UserHistory1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHistory1RoutingModule { }
