import { Component, OnInit } from '@angular/core';
import { Catalogo, Product } from '../../interfaces/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit{
  listProducts: Product[]=[];
  listCatalogo:Catalogo[]=[]
 
  constructor(private productService:ProductoService){}
 
ngOnInit(): void {
  this.getAllProducts()
}

getAllProducts(){
  this.productService.getListProducts().subscribe({
    next:(response)=>{
      this.listProducts=response.data;
  

    }
  })
}
}
