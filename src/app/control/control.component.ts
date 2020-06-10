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
  even: number = this.evenArray[this.counter];
  odd: number = this.oddArray[this.counter];

  constructor() { }
  ngOnInit(): void {
  }

  startIncrement() {
    this.onStart.emit(this.counter);
    this.interval = setInterval(() => { this.addOne() }, 3000);
    //this.show = !this.show;
  }

  addOne() {
    this.counter++;
    console.log(this.counter);
    if ( this.counter % 2 === 0 ) {
      this.evenArray.push(this.counter);
      //this.show = !this.show;
    } else {
      this.oddArray.push(this.counter);
      this.show = !this.show;
    }
  }

  stopIncrement() {
    this.onStop.emit();
    clearInterval(this.interval);
    this.counter = 0;
  }
}
