import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  constructor(private routeService: ActivatedRoute) { }

  ngOnInit() {
    let a = "kiscica"
    this.routeService.paramMap.subscribe(params => {
      const index: any = params.get('productId');
      if(index == null){
        return;
      }
      console.log("index:", index)
      this.product = products[index];
    });
  }
  

}