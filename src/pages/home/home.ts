import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import { PrimarySalesReportPage } from '../report/PrimarySalesReport/primarySalesReport';
//import 'rxjs/add/operator/map';
//import { Http,Headers, RequestOptions, RequestMethod } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataProvider]
})
export class HomePage {
  header_data:any;
  Pwcimage: String;
  Clientimage:String;
  errorMessage:String;
  iconsInject:any;
  UserName:String;
  AppHeading:String;
  bgColor: string[];
  icons:string[];
  Myarray:object[] = new Array();
  DataSetArray:object[]=new Array();
  DataManipulateArray:object[]=new Array();
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    //public http:Http
    public dataProvider: DataProvider
  ) {
    this.header_data={ismenu:true,ishome:false,title:"Home"};
    this.UserName="Welcome user name";
    this.AppHeading="Business Analytical Reporting";
    this.Pwcimage="assets/imgs/pwc_logo.png";
    this.Clientimage="assets/imgs/mgi_logo.png";
    
    //this.azureTestUrlBar();
    //this.FakeTest();
    this.GetMeghnaKPIDetails();    
  }
  /*FakeTest(){
    let RequestData={
      email: "peter@klaven", 
      password: "cityslicka"
    }
    this.dataProvider.FakeTestUrl(JSON.stringify(RequestData)).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }*/
  
  

  angularList(){
    this.dataProvider.getDemoApi().then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  GetMeghnaKPIDetails() {
    this.presentLoadingDefault();
    this.DataSetArray.push({YTD: "2018",QTD: "Q3",MTD: "Aug",ClientIdVal: "5",Flag : "MTD"})
    this.bgColor=[
      "panelFirstBox",
      "panelFirstBox panelSecondBox",
      "panelFirstBox panelThirdBox",
      "panelFirstBox panelFourthBox",
      "panelFirstBox panelSixthBox",
    ]
    this.icons=[
      "fa fa-caret-down",
      "fa fa-caret-up",
    ]
    this.dataProvider.sendPostRequest(this.DataSetArray).then((result) => {
      console.log(result);
      this.DataManipulateArray.push({
        KPI_Value:result["Table"][0]["KPI_Value"],
        KPI_Description:result["Table"][0]["KPI_Description"],
        change:result["Table"][0]["%change"]
      })
      this.DataManipulateArray.push({
        KPI_Value:result["Table1"][0]["KPI_Value"],
        KPI_Description:result["Table1"][0]["KPI_Description"],
        change:result["Table1"][0]["%change"]
      })
      this.DataManipulateArray.push({
        KPI_Value:result["Table2"][0]["KPI_Value"],
        KPI_Description:result["Table2"][0]["KPI_Description"],
        change:result["Table2"][0]["%change"]
      })
      this.DataManipulateArray.push({
        KPI_Value:result["Table3"][0]["KPI_Value"],
        KPI_Description:result["Table3"][0]["KPI_Description"],
        change:result["Table3"][0]["%change"]
      })
      this.DataManipulateArray.push({
        KPI_Value:result["Table4"][0]["KPI_Value"],
        KPI_Description:result["Table4"][0]["KPI_Description"],
        change:result["Table4"][0]["%change"]
      })
      for(let i=0; i<this.DataManipulateArray.length; i++){
        this.DataManipulateArray[i]["change"] <="1.40%" ? this.iconsInject=this.icons[0] : this.iconsInject=this.icons[1];
        this.Myarray.push({
          KPI_Value:this.DataManipulateArray[i]["KPI_Value"],
          KPI_Description:this.DataManipulateArray[i]["KPI_Description"],
          change:this.DataManipulateArray[i]["change"],
          bgClass:this.bgColor[i],
          icons:this.iconsInject
        })
      }
      //return this.DataManipulateArray
    }, (err) => {
      console.log(err);
    });
  }
  
  doRefresh(refresher) {
    //debugger
    
    this.presentLoadingDefault();
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    loading.present();
    setTimeout(() => {loading.dismiss();}, 5000); 
  }
  NavigateToPage(el){
    this.navCtrl.push(PrimarySalesReportPage, {'subHeadingName': el},{direction: 'front',duration: 2000,easing: 'ease-out'});
  }
  showConfirm(){
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }
  ionViewWillLeave() {
    console.log("Runs when the page is about to leave and no longer be the active page");
  }
  ionViewDidLeave(){
    console.log("Runs when the page has finished leaving and is no longer the active page.");
  }
  ionViewWillUnload(){
    console.log("Runs when the page is about to be destroyed and have its elements removed.");
  }

}
