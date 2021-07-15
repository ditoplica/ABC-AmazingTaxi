import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../@fury/shared/material-components.module';
import {HttpClientModule} from '@angular/common/http';
import {FeForgotpasswordRoutingModule} from './fe-forgotpassword-routing.module';
import {FeForgotpasswordComponent} from './fe-forgotpassword.component';



@NgModule({
  imports: [
    CommonModule,
    FeForgotpasswordRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [FeForgotpasswordComponent]
})
export class FeForgotpasswordModule {
}
