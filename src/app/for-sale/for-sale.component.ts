import { Component, OnInit } from '@angular/core';
import { ForSale } from '../for-sale.model';
import { ForSaleService } from '../for-sale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  providers: [ForSaleService]
})
export class ForSaleComponent implements OnInit {
  masterForSaleList: ForSale[];

  constructor(private router: Router, private forSaleService: ForSaleService){}

  ngOnInit() {
    this.masterForSaleList = this.forSaleService.getForSale();
  }

  postToEdit = null;
  newPosting = null;

  editPost(clickedPost){
    this.postToEdit = clickedPost;
  }

  doneEditing() {
    this.postToEdit = null;
  }
  addPostFormShow(){
    this.newPosting = true;
  }
  newForSale(newPost){
    this.masterForSaleList.push(newPost);
    this.newPosting = null;
  }

  deletePost(postToDelete) {
    var index = this.masterForSaleList.indexOf(postToDelete);
    this.masterForSaleList.splice(index, 1);
  }

  goToDetailPage(clickedPost) {
    this.router.navigate(['for-sale', clickedPost.id]);
  }
}
