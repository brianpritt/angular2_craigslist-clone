import { Component } from '@angular/core';
import { ForSale } from '../for-sale.model';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent {
  masterForSaleList: ForSale[] = [
    new ForSale("Nascar Wheel and Tire", " For you NSCAR fans - Just what you need for your shop or the Man Cave", "https://images.craigslist.org/00f0f_iKbjMVXbpYP_600x450.jpg", "nascarfan123"),
    new ForSale("Buck Fieldmate Survival Knife", "Vintage Buck Fieldmate Survival Knife. I bought it new when I was 12 and I've had it for 25 years. This is a great knife that has been used very little and it is in excellent condition. Asking $60 cash only please.", "https://images.craigslist.org/00k0k_32Qg1oHXnS_600x450.jpg", "knifeykniferson")
  ]
}
