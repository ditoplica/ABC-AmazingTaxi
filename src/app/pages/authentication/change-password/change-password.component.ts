import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'fury-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  baseUrl = environment.backend;
  form: FormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private http: HttpClient,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        oldPassword: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{8,20}$' +
            '')
        ]),
        newPassword: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{8,20}$' +
            '')
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{8,20}$' +
            '')
        ]),
      }
    );
  }

  send() {
    this.router.navigate(['/login']);
  }

}
