import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

import { HomePage } from '../home/home';
import { InicioPage } from '../inicio/inicio';
import { RegistroPage } from '../registro/registro';
import { RegistroFacePage } from '../registro-face/registro-face';

//@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  private data: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public FormBuilder: FormBuilder, 
  public toastCtrl: ToastController, public modalCtrl: ModalController) {
  this.data=this.FormBuilder.group({
  username: ['', Validators.required],
  password: ['',Validators.required]
  })
}

public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };

login() {
    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
    .then((response) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (!user.emailVerified) {
          user.sendEmailVerification();
        }
      })
      console.log(response);
      this.navCtrl.push(InicioPage);
    })
    .catch((error) => {
      this.showToast(error.message, 3000);
      console.log(error.message);
    })
  }
  register() {
    this.modalCtrl.create(RegistroPage).present();
  }

  RegFacebook()
  {
    this.navCtrl.push(RegistroFacePage);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LogInPage');
  }

}
