import { Component, OnInit } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';
//@IonicPage()
@Component({
  selector: 'page-PrimarySalesReport',
  templateUrl: 'PrimarySalesReport.html',
})
export class PrimarySalesReportPage{
  objectData:object;
  header_data:any;
  PrimaryHeading:string;
  reportTitle:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.header_data={ismenu:true,ishome:false,title:"Home"};
    //debugger
    this.navParams.get('subHeadingName') ? this.reportTitle=this.navParams.data["subHeadingName"] : this.reportTitle="Primary Sales Report";
      
  }
  /*ngOnInit(): void {
    debugger
    //this.objectData=this.navParams.get('dataArray');
    //console.log("Report:"+this.objectData);
  }*/
  MainPage(){
    this.navCtrl.push(HomePage);
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter PrimarySalesReportPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimarySalesReportPage');
  }


}
