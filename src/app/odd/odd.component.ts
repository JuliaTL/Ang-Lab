import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  @Input('odds') oddArray;
  odd: any = this.oddArray;

  constructor() { }

  ngOnInit(): void {
  }

}
