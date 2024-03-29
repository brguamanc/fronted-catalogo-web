import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Catalogo } from '../../interfaces/products';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{
  listCatalogo:Catalogo[]=[]
 
  constructor(private productService:ProductoService){}
 
ngOnInit(): void {
  this.getAllProducts()
}

getAllProducts(){
  this.productService.getListProducts().subscribe({
    next:(response)=>{
      this.listCatalogo=response.data;

    }
  })
}
}
