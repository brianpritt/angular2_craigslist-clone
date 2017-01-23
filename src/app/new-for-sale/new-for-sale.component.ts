import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForSale } from '../for-sale.model';
@Component({
  selector: 'new-for-sale',
  templateUrl: './new-for-sale.component.html',
  styleUrls: ['./new-for-sale.component.css']
})
export class NewForSaleComponent {
  @Input() childNewPosting: ForSale;
  @Input() childForSaleList: ForSale[];
  @Output() newForSaleSender = new EventEmitter();

  submitForm(title: string, content: string, image: string, author: string){
    var id: number = this.childForSaleList.length + 1;
    var newForSale: ForSale = new ForSale(title, content, image, author, id);
    this.newForSaleSender.emit(newForSale);
  }
}
