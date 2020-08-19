import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { IUser } from '../user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  pageTitle = 'LOGIN';
  errorMessage: string;
  isLoggingMode: boolean;
  isLoading: boolean;
  error: string;
  authSubscriber: any;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.authSubscriber.unsubscribe();
  }

  onLogin(loginForm: NgForm) {
    if(!loginForm.valid) {
      return;
    }
    this.isLoading = true;
    let observable: Observable<IUser>;

    if(this.isLoggingMode) {
        observable =  this.authService.login(loginForm.value)
    } else {
        observable = this.authService.signup(loginForm.value)
        }
    this.authSubscriber = observable.subscribe(
      res => {
        this.isLoading = false;
        this.router.navigate(['/']);
      }, error => this.error = 'Your request failed'
    );
    loginForm.reset();
    }

  onSwitchMode() {
    this.isLoggingMode = !this.isLoggingMode;
  }
}
