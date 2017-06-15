import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { RegistroPage } from '../pages/registro/registro';
import { LogInProvider } from '../providers/log-in/log-in';

import * as firebase from 'firebase';
import{ AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

export const config = {
  apiKey: "AIzaSyAvSV6gEklkDE7dDbBL5pYtx96r10pWIyQ",
    authDomain: "trabajoclaseune.firebaseapp.com",
    databaseURL: "https://trabajoclaseune.firebaseio.com",
    projectId: "trabajoclaseune",
    storageBucket: "trabajoclaseune.appspot.com",
    messagingSenderId: "954108903645"
};

firebase.initializeApp(config)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    RegistroPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogInProvider
  ]
})
export class AppModule {}
