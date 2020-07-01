import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logAdd(message: string) {
    alert(`Are you sure you want to Add this ${message} ?`);
  }
  logDelete(message: string) {
    alert(`Are you sure you want to Delete this ${message} ?`);
  }
}
