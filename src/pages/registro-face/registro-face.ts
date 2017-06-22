import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//@IonicPage()
@Component({
  selector: 'page-registro-face',
  templateUrl: 'registro-face.html',
})
export class RegistroFacePage {
  items: FirebaseListObservable<any[]>;
  displayName;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angFireDB: AngularFireDatabase, private angFireAuth: AngularFireAuth) {
  this.items=angFireDB.list('/Cuisines');
  angFireAuth.authState.subscribe(user=>{
    if(!user){
      this.displayName=null;
      return;
    }
    this.displayName=user.displayName;
  });
}

signFacebook(){
  this.angFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res=>console.log(res));
}

signOut(){
  this.angFireAuth.auth.signOut();
}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegistroFacePage');
  }

}
