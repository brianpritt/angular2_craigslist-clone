import { Injectable } from '@angular/core';
import { ForSale } from './for-sale.model';
import { FORSALE } from './mock-for-sale';

@Injectable()
export class FavoritesService {

  constructor() { }
  favoritesArray: ForSale[] = [];
  getFavorites(){
    for(var i = 0; i <= FORSALE.length - 1; i++){
      if(FORSALE[i].favorite){
        this.favoritesArray.push(FORSALE[i]);
      }
    }
    return this.favoritesArray;
  }
}
