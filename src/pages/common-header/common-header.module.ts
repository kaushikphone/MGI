import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonHeaderPage } from './common-header';

@NgModule({
  declarations: [
    CommonHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonHeaderPage),
  ],
})
export class CommonHeaderPageModule {}
