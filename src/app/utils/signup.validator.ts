import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class NamesValidationService {
  private names: string[];
  constructor() {
    this.names = ['john', 'doe', 'johan'];
  }
  validateUserName(userName: string): Observable<ValidationErrors> {
    return new Observable<ValidationErrors>(observer => {
      const name = this.names.find(name => name === userName);
      if (name) {
        observer.next({
          nameError: 'This Name is forbidden'
        });
        observer.complete();
      }
      observer.next(null);
      observer.complete();
    });
  }
}
