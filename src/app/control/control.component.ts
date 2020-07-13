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
  interval: any;

  constructor() { }
  ngOnInit(): void {
  }

  startIncrement():void {
    this.interval = setInterval(() => {
      this.addOne();
      this.onStart.emit(this.counter); }, 2000);
  }

  addOne() {
    this.counter++;
  }

  stopIncrement() {
    this.onStop.emit();
    clearInterval(this.interval);
    this.counter = 0;
    this.oddArray= [];
    this.evenArray = [];
  }
}
