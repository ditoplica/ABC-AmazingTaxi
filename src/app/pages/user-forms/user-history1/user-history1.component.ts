import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fury-user-history1',
  templateUrl: './user-history1.component.html',
  styleUrls: ['./user-history1.component.scss']
})
export class UserHistory1Component implements OnInit {

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
