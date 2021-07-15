import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {fadeInUpAnimation} from '../../../../@fury/animations/fade-in-up.animation';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Register} from './register.model';
import {RegistersService} from './registers.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'fury-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeInUpAnimation]
})
export class RegisterComponent implements OnInit {

  baseUrl = environment.backend;
  form: FormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private http: HttpClient,
              private registersService: RegistersService,
              private snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup(
      {
        firstName: new FormControl( '', []),
        lastName: new FormControl('', [Validators.required]),
        username: new FormControl('', [
          Validators.email,
          Validators.pattern(
            '^([\\w-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([\\w-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$')
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{8,20}$' +
            '')
        ]),
        phone: new FormControl('', [Validators.required]),
      }
    );

  }
  send() {
    if (!this.form.valid) {
      return;
    }
    const postData: Register = this.form.value;
    this.registersService.registerAndPost(postData).subscribe(responseData => {
       console.log('Sukses ne komponenten register: ', responseData);
      this.router.navigate(['/login']);
      this.snackbar.open('Confirmation email has been sent to your email address', '', {panelClass: 'success-toast'});
    }, error => {
       console.log('Deshtim: ', error);
      this.snackbar.open('Something Went Wrong', '', {panelClass: 'danger-toast'});
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
