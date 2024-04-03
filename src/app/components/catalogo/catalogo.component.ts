import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Catalogo, Imagenes, Product } from '../../interfaces/products';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{
  lisProductos:Product[]=[]
  listaImagenes:Imagenes[]=[]
  listData:Catalogo[]=[]

  constructor(private productService:ProductoService){}
 
ngOnInit(): void {
  this.getAllProducts()
  this.getAllImagenes()
}

getAllProducts(){
  this.productService.getListProducts().subscribe({
    next:(response)=>{
      this.lisProductos=response.data;
      console.log(this.lisProductos)
    }
  })
}
getAllImagenes(){
  this.productService.getListImagenes().subscribe({
    next:(response)=>{
      this.listaImagenes=response.data;
      console.log(this.listaImagenes)
    }
  })
}



}
