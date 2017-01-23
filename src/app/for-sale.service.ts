import { Injectable } from '@angular/core';
import { ForSale } from './for-sale.model';
import { FORSALE } from './mock-for-sale';

@Injectable()
export class ForSaleService {

  constructor() { }

  getForSale() {
    return FORSALE;
  }

  getForSaleById(forSaleId: number){
    for (var i=0; i <= FORSALE.length - 1; i++) {
      if (FORSALE[i].id === forSaleId) {
        return FORSALE[i];
      }
    }
  }

}
