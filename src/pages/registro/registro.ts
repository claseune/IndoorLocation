import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
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
  records: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams, public formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.records = db.list('/perfiles');
  this.registroData = this.formBuilder.group({
    registroMail: ['', Validators.required],
    registroPass: ['',Validators.required],
    nombre: ['',Validators.required],
    apellidoP: ['',Validators.required],
    apellidoM: ['',Validators.required],
    carrera: ['',Validators.required]
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
    console.log(response);
    this.records.push(this.registroData.value);
    this.navCtrl.setRoot(LogInPage);
  })
  .catch((error) => {
    this.showToast(error.message, 3000);
    console.log(error.message)
  })
}

/*save(){
    if(this.registroData.valid){
      this.records.push(this.registroData['nombre']['apellidoP']['apellidoM']['carrera'].value);
      //this.records.push(this.registroData['apellidoP'].value);
      //this.records.push(this.registroData['apellidoM'].value);
      //this.records.push(this.registroData['carrera'].value);
      this.showToast('Se ha guardado correctamente', 3000);
    }else{
      this.showToast('No ha llenado la información', 3000);
      console.error('No ha llenado la información')
    }   
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
