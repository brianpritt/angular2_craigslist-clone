import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForSale } from '../for-sale.model';

@Component({
  selector: 'for-sale-list',
  templateUrl: './for-sale-list.component.html',
  styleUrls: ['./for-sale-list.component.css']
})
export class ForSaleListComponent {
  @Input() childForSaleList: ForSale[];
  @Output() clickSender = new EventEmitter();
  selectedPost = null;

  showDetails(clickedPost) {
    if (this.selectedPost) {
      this.selectedPost = null;
    } else {
      this.selectedPost = clickedPost;
    }
  }
  editForSale(postToEdit: ForSale){
    this.clickSender.emit(postToEdit);
  }
}
