import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pageTitle = 'LOGIN';
  errorMessage: string;
  isLoggingMode: boolean;
  isLoading: boolean;
  authSubscriber: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    if(!loginForm.valid) {
      return;
    }
    this.isLoading = true;

    if(this.isLoggingMode) {
      this.authService.login(loginForm.value)
        .subscribe(
          res => {
            this.isLoading = false;
            console.log(res)});
    } else {
        this.authService.signup(loginForm.value)
          .subscribe(res => {
            this.isLoading = false;
            console.log(res)});
        }
    loginForm.reset();
    }

  onSwitchMode() {
    this.isLoggingMode = !this.isLoggingMode;
  }
}
