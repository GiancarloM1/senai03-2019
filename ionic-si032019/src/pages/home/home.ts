import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {Messages} from '../../providers/messages';
import { Toasted } from '../../providers/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaAlunos = [];
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
  public limparAlunos(){
    this.listaAlunos = [];
  }

  public adicionarAlunos(){
    this.listaAlunos.push({nome : "Aluno A"});
    this.listaAlunos.push({nome : "Aluno B"});
    this.listaAlunos.push({nome : "Aluno C"});
    this.listaAlunos.push({nome : "Aluno D"});
  }

  buttonClick(){
    this.exibirConteudo = !this.exibirConteudo;
  }

}