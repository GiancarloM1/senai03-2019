import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TamanhosProvider } from '../../providers/tamanhos';
import { SaboresProvider } from '../../providers/sabores';
import { DadosEntregaPage } from '../dados-entrega/dados-entrega';

/**
 * Generated class for the LogadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logado',
  templateUrl: 'logado.html',
})
export class LogadoPage {
  public lisTamanhos = [];
  public tam : any;
  public lisSabores = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tamanho : TamanhosProvider, public sabores : SaboresProvider) {
  }

  ionViewDidLoad(){
    this.tamanho.listaTamanho().subscribe(
      (data : any) =>{
        this.lisTamanhos = data;
      },
      (error : any) => {
        console.log(error)
      }    
      )

  };
 onChange(){
   console.log(this.tam)
    this.sabores.listaSabores(this.tam).subscribe(
      (data : any) =>{
        this.lisSabores = data;
      }
    )

  };
  dadosEntrega(){
    this.navCtrl.push(DadosEntregaPage)
  }

}
