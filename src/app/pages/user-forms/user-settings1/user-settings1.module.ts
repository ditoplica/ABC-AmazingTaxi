import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import {ListModule} from '../../../../@fury/shared/list/list.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {BreadcrumbsModule} from '../../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {UserSettings1Component} from './user-settings1.component';
import {UserSettings1RoutingModule} from './user-settings1-routing.module';

@NgModule({
  declarations: [UserSettings1Component],
  imports: [
    CommonModule,
    UserSettings1RoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    // Core
    ListModule,
    BreadcrumbsModule,

  ]
})
export class UserSettings1Module { }
