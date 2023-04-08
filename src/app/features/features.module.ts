import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgbProgressbarModule
  ],
  exports: [DashboardComponent]
})
export class FeaturesModule { }
