import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForSale } from '../for-sale.model';

@Component({
  selector: 'edit-for-sale',
  templateUrl: './edit-for-sale.component.html',
  styleUrls: ['./edit-for-sale.component.css']
})
export class EditForSaleComponent {
  @Input() childPostToEdit: ForSale;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing() {
    this.doneEditingSender.emit();
  }
}
