import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifAdd(message: string) {
    alert(`Are you sure you want to Add this ${message} ?`);
  }
  notifDelete() {
    alert(`Are you sure you want to Delete these posts?`);
  }

}
