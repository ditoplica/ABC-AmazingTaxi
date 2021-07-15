import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Register} from './register.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class RegistersService {

  constructor(
    private http: HttpClient) {
  }

  baseUrl = environment.backend;

  // ti tnjejten e ke bo veq je shku ne mitrovice prej peje, jo direkt
  registerAndPost(registerEntity: Register): Observable<any> {
    return this.http
      .post(this.baseUrl + 'auth/register/', registerEntity);
  }
}
