import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurySharedModule } from 'src/@fury/fury-shared.module';
import {ListModule} from '../../../@fury/shared/list/list.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {TaxisRoutingModule} from './taxis-routing.module';
import {TaxisComponent} from './taxis.component';

@NgModule({
  declarations: [TaxisComponent],
  imports: [
    CommonModule,
    TaxisRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    // Core
    ListModule,
    BreadcrumbsModule,
  ]
})
export class TaxisModule { }
