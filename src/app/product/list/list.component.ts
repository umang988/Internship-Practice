import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {

  products : any = '';
  data : any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy():void {
    this.data.unsubscribe();
  }

  public getData() : void{
    this.data = this.productService.getProduct()
    .subscribe((data) => {
      console.log("Product data",data);
      this.products = data;
    });
  }

  public deleteProduct(id){
    
  }

}
