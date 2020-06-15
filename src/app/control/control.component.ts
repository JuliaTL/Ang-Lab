import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Output('startIncrement') onStart = new EventEmitter();
  @Output('stopIncrement') onStop = new EventEmitter();
  @Output('evens') evenArray: Array<number> = [];
  @Output('odds') oddArray: Array<number> = [];
  counter: number = 0;
  show: boolean = false;
  interval: any;

  constructor() { }
  ngOnInit(): void {
  }

  startIncrement() {
    this.onStart.emit(this.counter);
    this.interval = setInterval(() => { this.addOne() }, 2000);
  }

  addOne() {
    this.counter++;
    console.log(this.counter);
    if ( this.counter % 2 === 0 ) {
      this.evenArray.push(this.counter);
    } else {
      this.show = !this.show;
      this.oddArray.push(this.counter);
    }
  }

  stopIncrement() {
    this.onStop.emit();
    clearInterval(this.interval);
    this.counter = 0;
    this.oddArray, this.evenArray = [];
  }
}
