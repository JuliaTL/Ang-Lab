import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Output('startIncrement') onStart = new EventEmitter();
  counter: number = 0;
  showEven: boolean = false;
  showOdd: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  startIncrement() {
    this.onStart.emit();
    setInterval(() => { this.addOne()}, 5000);
  }

  addOne() {
    this.counter++;
    console.log(this.counter);
    if ( this.counter % 2 === 0 ) {
      this.showEven = true;
    } else {
      this.showOdd = true;
    }
  }

  stopIncrement() {
    clearInterval();
  }
}
