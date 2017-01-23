/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForSaleService } from './for-sale.service';

describe('ForSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForSaleService]
    });
  });

  it('should ...', inject([ForSaleService], (service: ForSaleService) => {
    expect(service).toBeTruthy();
  }));
});
