import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any;
  records: FirebaseListObservable<any>;
  private exampleFormData: FormGroup;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public FormBuilder: FormBuilder) {
      this.records = db.list('/usuarios');

      this.exampleFormData = this.FormBuilder.group({
        name: ['',Validators.required],
        gender: ['',Validators.required],
        meal: ['',Validators.required]
      })

  }

save(){
  if(this.exampleFormData.valid){
    this.records.push(this.exampleFormData.value)
  }else{
    console.error('verifique su informacion')
  }
}

  ionViewDidLoad() {
    console.log(this.records)

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
