import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindLocationPage } from '../find-location/find-location';
import { ContactosPage } from '../contactos/contactos';
import { PerfilPage } from '../perfil/perfil';
import { LogInPage } from '../log-in/log-in';

/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goFindLocation(){
    this.navCtrl.push(FindLocationPage);
  }

  goPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  goContactos(){
    this.navCtrl.push(ContactosPage);
  }
  goLogOut(){
    this.navCtrl.setRoot(LogInPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
