import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../pages/authentication/services/auth.service';

@Component({
  selector: 'fury-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  isOpen: boolean;
  fullName = 'Endrit Toplica';
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  userProfile() {
    localStorage.clear();
    this.router.navigate(['/user-profile']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
