import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import {ListModule} from '../../../../@fury/shared/list/list.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {BreadcrumbsModule} from '../../../../@fury/shared/breadcrumbs/breadcrumbs.module';

import {AgmCoreModule} from '@agm/core';
import {UserHistory1RoutingModule} from './user-history1-routing.module';
import {UserHistory1Component} from './user-history1.component';

@NgModule({
  declarations: [UserHistory1Component],
  imports: [
    CommonModule,
    UserHistory1RoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    // Core
    ListModule,
    BreadcrumbsModule,
    AgmCoreModule
  ]
})
export class UserHistory1Module { }
