import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSettings1Component} from './user-settings1.component';

const routes: Routes = [
  {
    path: '',
    component: UserSettings1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettings1RoutingModule { }
