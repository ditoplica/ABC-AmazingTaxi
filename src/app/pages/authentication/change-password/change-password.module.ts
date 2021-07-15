import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../@fury/shared/material-components.module';
import {HttpClientModule} from '@angular/common/http';


import {ChangePasswordRoutingModule} from './change-password-routing.module';
import {ChangePasswordComponent} from './change-password.component';



@NgModule({
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule {
}
