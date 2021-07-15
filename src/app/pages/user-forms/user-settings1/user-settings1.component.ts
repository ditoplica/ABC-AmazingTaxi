import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fury-user-settings1',
  templateUrl: './user-settings1.component.html',
  styleUrls: ['./user-settings1.component.scss']
})
export class UserSettings1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
