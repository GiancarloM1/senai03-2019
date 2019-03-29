import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toasted } from '../providers/toast';
import { LoginProvider } from '../providers/login';
import { HttpProvider } from '../providers/http';
import { TamanhosProvider } from '../providers/tamanhos';
import { LogadoPage } from '../pages/logado/logado';
import { SaboresProvider } from '../providers/sabores';
import { DadosEntregaPage } from '../pages/dados-entrega/dados-entrega';
import { CidadesProvider } from '../providers/cidades';
import { BairrosProvider } from '../providers/bairros';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    LogadoPage,
    DadosEntregaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    LogadoPage,
    DadosEntregaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toasted,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    HttpProvider,
    TamanhosProvider,
    SaboresProvider,
    CidadesProvider,
    BairrosProvider,
  ]
})
export class AppModule {}
