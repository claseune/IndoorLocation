import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

import { LogInPage } from '../log-in/log-in';
/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  private registroData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public toastCtrl: ToastController) {
  this.registroData = this.formBuilder.group({
    registroMail: ['', Validators.required],
    registroPass: ['',Validators.required]

  })
}

public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };

register(){
  firebase.auth().createUserWithEmailAndPassword( this.registroData.controls['registroMail'].value, this.registroData.controls['registroPass'].value)
  .then((response) => {
    console.log(response)
    this.navCtrl.setRoot(LogInPage);
  })
  .catch((error) => {
    this.showToast(error.message, 3000);
    console.log(error.message)
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
