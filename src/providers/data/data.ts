//import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
@Injectable()
export class DataProvider {
  fakeUrl="https://reqres.in/api/login";
  apiUrl = 'http://35.153.5.27:8002/api/MeghnaMobileAPI/GetMeghnaKPIDetails';
  demoApiUrl="https://www.w3schools.com";
  azureUrl="https://pwc.azure-api.net/check-gstin-validity/v1.0/api/GSTINCheckFn";
  constructor(
    public http: Http,
    private toastCtrl: ToastController
  ) {
    console.log('Hello DataProvider Provider');
  }
  presentToast(dynamicMsg:string) {
    let toast = this.toastCtrl.create({
      message: dynamicMsg,
      duration: 10000,
      position: 'top',
      cssClass: 'normalToast'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
  
  getDemoApi(){
    return new Promise((resolve, reject) => {
      this.http.get(this.demoApiUrl+'/angular/customers.php')
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }
  sendPostRequest(data:any) {
    let headers = new Headers();
    //this.presentToast(data);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let body =  "YTD=" +data[0].YTD + "&QTD=" + data[0].QTD + "&MTD=" + data[0].MTD + "&ClientIdVal=" + data[0].ClientIdVal + "&Flag=" + data[0].Flag;
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body, options)
      .toPromise()
      .then((response) =>
      {
         //this.presentToast(response.json());
        //console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        this.presentToast(JSON.stringify(error));
        //console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

}
