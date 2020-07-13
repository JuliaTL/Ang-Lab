import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Home task #3';
  oddArray: Array<number> = [];
  evenArray: Array<number> = [];

  onStart(counter: number) {
    if ( counter % 2 === 0 ) {
      this.evenArray.push(counter);
    } else {
      this.oddArray.push(counter);
    }
  }
}
