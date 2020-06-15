import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Home task #3';
  private $event: any;

  onStart($event: any) {
    this.$event = $event;
  }
}
