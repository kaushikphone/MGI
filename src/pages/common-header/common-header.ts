import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-common-header',
  templateUrl: 'common-header.html',
})
export class CommonHeaderPage {
  header_data: any;
  UserName:String;
  AppHeading:String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.UserName="Welcome user name";
    this.AppHeading="Business Analytical Reporting";
  }
  @Input()
  set header(header_data: any) {
    this.header_data=header_data;
    
  }
  get header() {
    return this.header_data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonHeaderPage');
  }

}
