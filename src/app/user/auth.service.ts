import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseURL, apiBaseURLSignUp } from '../utils/api';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor(private http: HttpClient) {
 }
 login(value: {email: string, password: string}){
   return this.http.post<IUser>(apiBaseURL, {
     ...value,
     returnSecureToken: true
   });
 }
  signup(value: {email: string, password: string}){
    return this.http.post<IUser>(apiBaseURLSignUp, {
      ...value,
      returnSecureToken: true
    });
  }
}
