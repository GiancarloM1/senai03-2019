import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class Toasted {

    constructor(public toastCtrl: ToastController) { }
  
    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'SÓ QUE NÃO',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }
  }