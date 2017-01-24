import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { ForSale } from '../for-sale.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [FavoritesService]
})
export class FavoritesComponent implements OnInit {
  favorites: ForSale[];
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

}
