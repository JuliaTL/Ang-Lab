import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-create-shopping-item',
  templateUrl: './create-shopping-item.component.html',
  styleUrls: ['./create-shopping-item.component.scss']
})
export class CreateShoppingItemComponent implements OnInit {
  @ViewChild('itemNameInput') itemNameInput;
  @ViewChild('itemAmountInput') itemAmountInput;
  @Output('createItem') onCreateItem = new EventEmitter<{ itemName: string, itemAmount: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  createItem(itemNameInput, itemAmountInput) {
    this.onCreateItem.emit({
      itemName: itemNameInput.value,
      itemAmount: itemAmountInput.value
  });
  }
}
