import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any;
  record: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
      this.record = db.list('/usuarios')
  }

  ionViewDidLoad() {
    console.log(this.record)

    this.info = "nada";
    firebase.auth().onAuthStateChanged(user => {
      if (user.emailVerified) {
        this.info = 'verificado'
      } else {
        this.info = 'no verificado'
      }
    })
    console.log('ionViewDidLoad RegisterPage');
  }

}
