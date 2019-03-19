import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toasted } from '../../providers/toast';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username : string;
  pass : string ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : Toasted, public login : LoginProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(){
    this.login.singIn()  



    if (this.username === "Gian" && this.pass === "gian123"){
      this.navCtrl.setRoot(HomePage);
    }
    else{
      this.toast.presentToast();
    }

  }

}
