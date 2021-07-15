import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import {AuthService} from '../services/auth.service';
import {User} from './User';
import {Subject} from 'rxjs';

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  profileUpdated: Subject<boolean> = new Subject<boolean>();
  userProfile: User;
  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (!this.form.valid) {
      return;
    }
  //  this.loginButton.active = true;
    console.log(this.form.value)
    this.auth.login(this.form.value).subscribe(response => {
      console.log(this.form.value)
      console.log('Login response', response);
     // this.loginButton.active = false;
      this.router.navigate(['/']);
      this.snackbar.open('Welcome to Amazing Taxi', '');
    }, error => {
      console.log('Login error', error);
      console.log(this.form.value)
     // this.loginButton.active = false;
     // this.snackbar.open('Something went wrong', '', {panelClass: 'danger-toast'});
       this.snackbar.open(error.error.message, '', {panelClass: 'danger-toast'});
    });
  }



  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
