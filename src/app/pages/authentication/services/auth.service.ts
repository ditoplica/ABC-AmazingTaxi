import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthToken} from '../token.model';
import {map} from 'rxjs/operators';

// import {NgxPermissionsService} from 'ngx-permissions';
import {environment} from '../../../../environments/environment';
import {User} from '../login/User';
import {Observable, Subject} from 'rxjs';
import {JwtHelper} from 'angular2-jwt';
const apiUrl = environment.backend;
const jwtHelper: JwtHelper = new JwtHelper();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profileUpdated: Subject<boolean> = new Subject<boolean>();
  userProfile: User;
  constructor(
    private http: HttpClient,
  ) {}

  login(body: any): Observable<AuthToken> {
    const url = `${apiUrl}auth/signin/`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(url, body, {headers: headers}).pipe(
      map((response: AuthToken) => {
        // console.log('Logged in', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('refresh_token', response.refreshToken);
        localStorage.clear();
        const decodedToken = jwtHelper.decodeToken(response.token);
        // if (['ADMIN'].includes(decodedToken['roles'])) {
        //   localStorage.setItem('token', response.token);
        //   localStorage.setItem('refresh_token', response.refreshToken);
        //   console.log('Logged in', response);
        //   //  this.initUserProfileAndRoles();
        //   return response;
        // } else {
        //   throw new HttpErrorResponse({
        //     status: 405,
        //     error: 'Only Administrators are allowed to access Amazing Taxi.'
        //   });
        // }
        return response;
      })
    );
  }
  // isAuthOrRefreshNotExpired(): boolean {
  //   const token = this.getToken();
  //   const refresh_token = localStorage.getItem('refresh_token');
  //
  //   if (token && refresh_token) {
  //     return (tokenNotExpired(token) || tokenNotExpired(refresh_token));
  //   } else {
  //     return false;
  //   }
  // }
  // initUserProfileAndRoles() {
  //   const token = this.getToken();
  //   if (token) {
  //     const decodedToken = jwtHelper.decodeToken(token);
  //     console.log(decodedToken['role']);
  //     this.permissionsService.loadPermissions([decodedToken['role']]);
  //   }
  //   if (this.isAuthenticated()) {
  //     this.initUserProfile();
  //   }
  // }
  // public getToken(): string {
  //   return localStorage.getItem('token');
  // }
  // getUserProfile(): User {
  //   return this.userProfile;
  // }
  // public getUserName(): string {
  //   return `${this.userProfile.firstName} ${this.userProfile.lastName}`;
  // }
  // initUserProfile() {
  //   this.administratorService.getProfile().subscribe(response => {
  //     this.userProfile = response;
  //     this.profileUpdated.next(true);
  //   });
  // }
  // public isAuthenticated(): boolean {
  //   const token = this.getToken();
  //   return tokenNotExpired(null, token);
  // }
}
