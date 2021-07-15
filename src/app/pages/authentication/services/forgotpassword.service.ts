import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthToken} from '../token.model';
import {map} from 'rxjs/operators';

// import {NgxPermissionsService} from 'ngx-permissions';
import {environment} from '../../../../environments/environment';
import {User} from '../login/User';
import {Observable, Subject} from 'rxjs';
import {JwtHelper} from 'angular2-jwt';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
const apiUrl = environment.backend;
const jwtHelper: JwtHelper = new JwtHelper();

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  profileUpdated: Subject<boolean> = new Subject<boolean>();
  userProfile: User;
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {}

  sendRecoveryLink(postData: {email: string}) {
    const url = `${apiUrl}auth/user/resetPassword/`;
    return this.http.post(url, postData).subscribe(responseData => {
      console.log('Login response', responseData);
      this.router.navigate(['/']);
      this.snackbar.open('Please check your email to change password', '');
    }, error => {
      console.log('Error', error);
      // this.loginButton.active = false;
      // this.snackbar.open('Something went wrong', '', {panelClass: 'danger-toast'});
      this.snackbar.open(error.message, '', {panelClass: 'danger-toast'});
    });
  }
}
