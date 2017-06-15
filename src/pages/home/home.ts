import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any;
  record: FirebaseListObservable<any>;
  private exampleFormData: FormGroup;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public FormBuilder: FormBuilder) {
      this.record = db.list('/usuarios')

      this.exampleFormData = this.FormBuilder.group({
        name: ['',Validators.required],
        gender: ['',Validators.required],
        color: ['',Validators.required]
      })

  }

save(){
  if(this.exampleFormData.valid){
    this.record.push(this.exampleFormData.value)
  }else{
    console.error('verifique su informacion')
  }
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
