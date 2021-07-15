import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import {ListModule} from '../../../../@fury/shared/list/list.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {BreadcrumbsModule} from '../../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {AgmCoreModule} from '@agm/core';
import {UserMap1Component} from './user-map1.component';
import {UserMap1RoutingModule} from './user-map1-routing.module';

@NgModule({
  declarations: [UserMap1Component],
  imports: [
    CommonModule,
    UserMap1RoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    // Core
    ListModule,
    BreadcrumbsModule,
    AgmCoreModule
  ]
})
export class UserMap1Module { }
