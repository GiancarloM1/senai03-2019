import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login';
import { LogadoPage } from '../logado/logado';
import { Toasted } from '../../providers/toast';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public login : LoginProvider, private toast : Toasted) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(){
    this.login.singIn(this.username, this.pass).subscribe(
      (data : any) => {
        this.navCtrl.setRoot(LogadoPage)
      },
      (error : any) => {
        this.toast.presentToast()

      }
    )
    };
 
    }



