import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForSale } from '../for-sale.model';
import { Router } from '@angular/router';

@Component({
  selector: 'for-sale-list',
  templateUrl: './for-sale-list.component.html',
  styleUrls: ['./for-sale-list.component.css']
})
export class ForSaleListComponent {
  @Input() childForSaleList: ForSale[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteClickSender = new EventEmitter();
  selectedPost = null;

  constructor(private router: Router){}

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

  deleteForSale(postToDelete: ForSale) {
    this.deleteClickSender.emit(postToDelete)
  }

  goToDetailPage(clickedPost: ForSale) {
    this.router.navigate(['for-sale', clickedPost.id]);
  }
}
