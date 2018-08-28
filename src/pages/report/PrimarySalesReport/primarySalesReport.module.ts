import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimarySalesReportPage } from './primarySalesReport';

@NgModule({
  declarations: [
    PrimarySalesReportPage
  ],
  imports: [
    IonicPageModule.forChild(PrimarySalesReportPage),
  ],
})
export class PrimarySalesReportPageModule {}