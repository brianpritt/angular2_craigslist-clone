import { Component, Input } from '@angular/core';
import { ForSale } from '../for-sale.model';

@Component({
  selector: 'for-sale-list',
  templateUrl: './for-sale-list.component.html',
  styleUrls: ['./for-sale-list.component.css']
})
export class ForSaleListComponent {
  @Input() childForSaleList: ForSale[];
  selectedPost = null;

  showDetails(clickedPost) {
    this.selectedPost = clickedPost;
  }
}
