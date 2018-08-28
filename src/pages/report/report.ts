import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { PrimarySalesReportPage } from './PrimarySalesReport/primarySalesReport';

//@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  reportTitle:string;
  dataArray=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    debugger
    this.reportTitle="Report";
    this.dataArray.push({
      Fname:'kaushik',
      lName:'Prasad'
    })
    this.navCtrl.push(PrimarySalesReportPage, {'dataArray': this.dataArray},{
      direction: 'back', // default for push is 'forward'
      duration: 2000, // 2 seconds
      easing: 'ease-out'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}
