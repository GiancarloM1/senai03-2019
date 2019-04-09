import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CidadesProvider } from '../../providers/cidades';
import { BairrosProvider } from '../../providers/bairros';

/**
 * Generated class for the DadosEntregaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-entrega',
  templateUrl: 'dados-entrega.html',
})
export class DadosEntregaPage {
  public showCidades = [];
  public cid : any;
  public bairro : any;
  public showBairros = [];
  public exibirTexto :boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public cidade : CidadesProvider, public bairros : BairrosProvider) {
  }

  ionViewDidLoad() {
    this.cidade.listaCidades().subscribe(
      (data : any) =>{
        this.showCidades = data;
      },
      (error : any) =>{
        console.log(error)
      }
    )
    
  };
  onChange(){
    console.log(this.cid)
    this.bairros.listaBairros(this.cid).subscribe(
      (data : any) =>{
        this.showBairros = data;
      }
    )
  };
  onChange2(){
    this.exibirTexto = true;
  };
  reset(){
    this.cid = null;
    this.exibirTexto = false;
  }

}
