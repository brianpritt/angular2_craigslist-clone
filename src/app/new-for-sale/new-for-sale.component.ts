import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForSale } from '../for-sale.model';
@Component({
  selector: 'new-for-sale',
  templateUrl: './new-for-sale.component.html',
  styleUrls: ['./new-for-sale.component.css']
})
export class NewForSaleComponent {
  @Input() childNewPosting: ForSale;
  @Output() newForSaleSender = new EventEmitter();

  submitForm(title: string, content: string, image: string, author: string, id: number){
    var newForSale: ForSale = new ForSale(title, content, image, author, id);
    this.newForSaleSender.emit(newForSale);
  }
}
