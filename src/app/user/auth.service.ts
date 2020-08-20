import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseURL, apiBaseURLSignUp } from '../utils/api';
import {IUser, User} from './user.model';
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject(null);
  tokenExpTimer: any;
  isAuthenticate = false;
  currentUser;

 constructor(private http: HttpClient,
             private router: Router) {
 }
 get token(): string{
    return ;
 }
 login(value: {email: string, password: string}){
   this.currentUser = localStorage.getItem('user');
   this.isAuthenticate = true;
   return this.http.post<IUser>(apiBaseURL, {
     ...value,
     returnSecureToken: true
   }).pipe(tap(resData => {
     this.createUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
   }));
 }
 autoLogin() {
   const userData = JSON.parse(localStorage.getItem('user'));
   if(!userData){
     return;
   }
   const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData.tokenExpDate));
   if(loadedUser.token){
     const duration = new Date(userData.tokenExpDate).getTime() - new Date().getTime();
     this.autoLogout(+duration);
     this.user.next(loadedUser);
   }

 }
 autoLogout(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logout();
    }, expDuration);
 }
 private createUser(email: string, localId: string, idToken: string, expiresIn: number) {
   const expDate = new Date(new Date().getTime() + expiresIn * 1000);
   const user = new User(email, localId, idToken, expDate);
   this.user.next(user);
   localStorage.setItem('user', JSON.stringify(user));
   this.autoLogout(expiresIn * 1000);
 }
  signup(value: {email: string, password: string}){
    this.isAuthenticate = true;
    return this.http.post<IUser>(apiBaseURLSignUp, {
      ...value,
      returnSecureToken: true
    }).pipe(tap(resData => {
      this.createUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    if(this.tokenExpTimer){
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
    localStorage.removeItem('user');
  }

}
