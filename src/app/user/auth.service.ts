import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseURL, apiBaseURLSignUp } from '../utils/api';
import {IUser, User} from './user.model';
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject(null);

 constructor(private http: HttpClient) {
 }
 login(value: {email: string, password: string}){
   return this.http.post<IUser>(apiBaseURL, {
     ...value,
     returnSecureToken: true
   }).pipe(tap(resData => {
     this.createUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
   }));
 }
 private createUser(email: string, localId: string, idToken: string, expiresIn: number) {
   const expDate = new Date(new Date().getTime() + expiresIn * 1000);
   const user = new User(email, localId, idToken, expDate);
   this.user.next(user);
 }
  signup(value: {email: string, password: string}){
    return this.http.post<IUser>(apiBaseURLSignUp, {
      ...value,
      returnSecureToken: true
    }).pipe(tap(resData => {
      this.createUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));;
  }
}
