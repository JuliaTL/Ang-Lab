import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {
  @Input('evens') evenArray: Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

}
