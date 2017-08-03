import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, MyLocationOptions, GoogleMapsEvent, LatLng, CameraPosition, Marker, MarkerOptions } from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-find-location',
  templateUrl: 'find-location.html',
})
export class FindLocationPage {
  longData: number; latData: number;
  mik: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation:Geolocation, public gMaps: GoogleMaps) {
  }

  ionViewWillEnter(){
    this.loadMap();
    /*let options: GeolocationOptions = {
      enableHighAccuracy: true
    }

    this.geolocation.getCurrentPosition(options).then((res) => {
      console.log('resp: ', res)
      this.loadMap();
    }).catch((error) => {
      alert(error)
  });*/

}

loadMap() {
 let element: HTMLElement = document.getElementById('map');
 let map: GoogleMap = this.gMaps.create(element);

 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker

     let options: MyLocationOptions = {
      enableHighAccuracy: true
    }
    map.getMyLocation(options).then((resp)=>{
    console.log('resp: ', resp)
       this.longData = resp.latLng.lng;
       this.latData = resp.latLng.lat;

       //let ionic: LatLng = new LatLng(this.latData, this.longData);
       
       this.mik=resp.latLng;

       let position: CameraPosition = {
        target: this.mik,
        zoom: 18,
        tilt: 30
      };
      // move the map's camera to position
      map.moveCamera(position);
      
      /*let markerOptions: MarkerOptions = {
      position: this.mik,
      title: 'Ionic'
    };

    map.addMarker(markerOptions)
      .then((marker: Marker) => {
        marker.showInfoWindow();
      })*/
    })
    map.setMyLocationEnabled(true);
   });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindLocationPage');
  }

}
