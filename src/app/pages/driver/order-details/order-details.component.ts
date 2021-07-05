import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Connect_info } from 'src/app/models/connectinfo';
import { Driver } from 'src/app/models/driversModel';
import { AlertService } from 'src/app/services/alert.service';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  connect_info: Connect_info[];
  status: any;
  order_number:any;
  // order_info:Driver;

  constructor(public modalController: ModalController, 
    public actionSheetController: ActionSheetController,
    private httpService :HttpServiceService,
    private alertService: AlertService,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  submit() {
    let data = {
      // order_number:[this.connect_info[0].order_number]
      order_number:this.connect_info[0].order_number
    }
    this.order_number = '88897';
    console.log(data)
    this.httpService.post('auth/update_status', this.order_number).subscribe(
      order_number => {
        this.alertService.presentToast("تم تحديث البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
      }
    )
  }

  ionViewWillEnter() {
    this.httpService.makeGet('auth/receive_infoconnect').subscribe(
      connect_info => {
        this.connect_info = connect_info;
        console.log('connect_info in order details');
        console.log(connect_info);
      }
    )
  }

}
