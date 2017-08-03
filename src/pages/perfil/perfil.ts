import { Component } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { EditPage } from '../edit/edit';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
info: any;
  records: FirebaseListObservable<any>;
  private listasFormData: FormGroup;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public FormBuilder: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.records = db.list('/perfiles');

      this.listasFormData = this.FormBuilder.group({
        nombre: ['',Validators.required],
        apellidoP: ['',Validators.required],
        ApellidoM: ['',Validators.required],
        Carrera: ['',Validators.required]
      })
  }

 

  edit(key){
    let info = {
      key: key
    }
    this.modalCtrl.create(EditPage, info).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
