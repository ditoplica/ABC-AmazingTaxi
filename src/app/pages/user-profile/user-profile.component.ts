import { Component, OnInit } from '@angular/core';
import {fadeInUpAnimation} from '../../../@fury/animations/fade-in-up.animation';

@Component ({
  selector: 'fury-users',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [fadeInUpAnimation]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
