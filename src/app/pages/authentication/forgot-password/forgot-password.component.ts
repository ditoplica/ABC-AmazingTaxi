import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import {ForgotpasswordService} from '../services/forgotpassword.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'fury-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUpAnimation]
})
export class ForgotPasswordComponent implements OnInit {

  form = this.fb.group({
    email: [null, Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private forgotPasswordService: ForgotpasswordService
  ) { }

  ngOnInit() {
  }

  send() {
    console.log('Test');
    this.router.navigate(['/login']);
    this.forgotPasswordService.sendRecoveryLink(this.form.get('email').value);
  }

}
