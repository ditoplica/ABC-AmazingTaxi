import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMap1Component} from './user-map1.component';

const routes: Routes = [
  {
    path: '',
    component: UserMap1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMap1RoutingModule { }
