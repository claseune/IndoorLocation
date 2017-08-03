import { Component } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

/**
 * Generated class for the ContactosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  info: any;
  records: FirebaseListObservable<any>;
  private registroData: FormGroup;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public formBuilder: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

}

