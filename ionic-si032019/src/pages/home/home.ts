import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {Messages} from '../../providers/messages';
import { Toasted } from '../../providers/toast';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public exibirConteudo : boolean = true;

  constructor(public navCtrl: NavController, private messages : Messages, private toast : Toasted) {

  }
  public presentToast(){
    this.toast.presentToast();
  }

  public showMessage(){
    this.messages.loadingShow();

    this.messages.loadingHide();
  }

  buttonClick(){
    this.exibirConteudo = !this.exibirConteudo;
  }

}
