import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName: string = 'John Doe';
  showEl: boolean = false;
  numbers: Array<number> = [];

  constructor() { }

  resetuserName(): void {
    this.userName = '';
  }

  onClick(): void {
    this.showEl = !this.showEl;

    if (this.numbers.length) {
      this.numbers.push(this.numbers[this.numbers.length - 1] + 1)
    } else {
      this.numbers.push(1)
    }
  }
}

