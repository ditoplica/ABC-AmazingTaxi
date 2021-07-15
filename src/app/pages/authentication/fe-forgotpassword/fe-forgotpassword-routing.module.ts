import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeForgotpasswordComponent} from './fe-forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    component: FeForgotpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeForgotpasswordRoutingModule {
}
