import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toasted,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    HttpProvider
  ]
})
export class AppModule {}
