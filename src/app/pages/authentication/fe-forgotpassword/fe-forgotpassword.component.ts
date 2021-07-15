import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {fadeInUpAnimation} from '../../../../@fury/animations/fade-in-up.animation';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'fury-fe-forgotpassword',
  templateUrl: './fe-forgotpassword.component.html',
  styleUrls: ['./fe-forgotpassword.component.scss'],
  animations: [fadeInUpAnimation]
})
export class FeForgotpasswordComponent implements OnInit {

  baseUrl = environment.backend;
  form: FormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private http: HttpClient,
              private snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup(
      {
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


  // send() {
  //   if (!this.form.valid) {
  //     return;
  //   }
  //   const postData: Register = this.form.value;
  //   this.registersService.registerAndPost(postData).subscribe(responseData => {
  //     // console.log('Sukses ne komponenten register: ', responseData);
  //     this.router.navigate(['/login']);
  //     this.snackbar.open('Confirmation email has been sent to your email address', '', {panelClass: 'success-toast'});
  //   }, error => {
  //     // console.log('Deshtim: ', error);
  //     this.snackbar.open('Something Went Wrong', '', {panelClass: 'danger-toast'});
  //   });
  // }

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
