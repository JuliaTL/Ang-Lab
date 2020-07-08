import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }

  isLogged() {
    return this.logged;
  }
}
