import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ToastrService } from 'ngx-toastr';
import { ProgressBarComponent } from "../../shared/progress-bar/progress-bar.component";
@Component({
    selector: 'app-list-products',
    standalone: true,
    templateUrl: './list-products.component.html',
    styleUrl: './list-products.component.css',
    imports: [CommonModule, RouterLink, ProgressBarComponent]
})
export class ListProductsComponent implements OnInit{
  isModelOpen = false;
  listProducts: Product[]=[];
  productoSeleccionado!:Product;
  loading:boolean=false

  constructor(private productService:ProductoService,
    private toastr: ToastrService){}
 
ngOnInit(): void {
  this.getAllProducts()
}

getAllProducts(){
  this.loading = true
  this.productService.getListProducts().subscribe({
    next:(response)=>{
      if (response.data) {
        this.listProducts=response.data;
        this.loading = false
      }
    }
  })
}
deleteProduct(id: string) {
  this.loading = true
  this.productService.deleteProduct(id).subscribe({
    next: (response) => {
      this.toastr.warning("Produto eliminado con éxito","Producto elmiminado");
      this.getAllProducts();
      this.loading = false
    },
  });
}

loadProducto(data:Product){
  this.productoSeleccionado = data;

}

}
