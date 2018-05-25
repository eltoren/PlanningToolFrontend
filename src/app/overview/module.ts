import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'angular-calendar';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {DemoUtilsModule} from './calendar-utils/module';
import {OverviewComponent} from './overview.component';

import {AppRoutingModules} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule,
    AppRoutingModules
  ],
  declarations: [OverviewComponent],
  exports: [OverviewComponent]
})
export class OverviewModule {}
