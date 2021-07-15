import { Component, OnInit } from '@angular/core';
import randomLocation from 'random-location';
import {MapsService} from './maps1.service';
import {Router} from '@angular/router';
@Component({
  selector: 'fury-user-map1',
  templateUrl: './user-map1.component.html',
  styleUrls: ['./user-map1.component.scss']
})
export class UserMap1Component implements OnInit {
  screenWidth = window.innerWidth;
  latitude = 42.665440;
  longitude = 21.165319;
  coordinates: {latitude: number; longitude: number}[] = [];
  constructor(private map: MapsService,
              private router: Router) { }

  ngOnInit() {
    // this.map.getLocation().subscribe(data => {
    //   console.log(data);
    //   this.lat = data.latitude;
    //   this.lng = data.longitude;
    // });
    for (let i = 0; i < 10; i++) {
      this.generateRandomPoints();
    }
    console.log(this.coordinates);
  }

  generateRandomPoints() {
    const R = 5000; // meters

    const randomPoint = randomLocation.randomCirclePoint({latitude: this.latitude, longitude: this.longitude}, R);
    this.coordinates.push(randomPoint);
  }
  historyBTN() {
    this.router.navigate(['/user-forms/user-history1']);
  }
  mapBTN() {
    this.router.navigate(['/user-forms/user-map1']);
  }
  settingsBTN() {
    this.router.navigate(['/user-forms/user-settings1']);
  }

}
