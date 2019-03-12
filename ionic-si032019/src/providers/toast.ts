import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class Toast {

    constructor(public toastCtrl: ToastController) { }
  
    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Hummm Toast',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }
  }