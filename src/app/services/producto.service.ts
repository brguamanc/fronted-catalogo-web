import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError,of } from 'rxjs';
import { Product ,ApiResponse, Imagenes} from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQnlyb24iLCJpYXQiOjE3MTE1OTkzNDAsImV4cCI6MTc1NDc5OTM0MH0.oAGdFMJXN2LBkpjSiP7PK8kd1HeAdX_yzbA3OZGrdv8"');
  constructor(private http:HttpClient) { }
  myAppUrl :string = "https://backend-catalogo-web.vercel.app/api";
  
  getListProducts():Observable<ApiResponse< Product[]>>{
    return this.http.get<ApiResponse<Product[]>>(`${this.myAppUrl}`+'/productos')
  }
  getListImagenes():Observable<ApiResponse< Imagenes[]>>{
    return this.http.get<ApiResponse<Imagenes[]>>(`${this.myAppUrl}`+'/imagenes')
  }
  getProduct(id: string): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${this.myAppUrl}/productos/${id}`);
  }

  createProduct(producto: Product): Observable<any> {
    return this.http.post(`${this.myAppUrl}/productos`, producto);
  }

  updateProduct(id: string, producto: Product): Observable<any> {
    return this.http.put(`${this.myAppUrl}/productos/${id}`, producto);
  }

  deleteProduct(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.myAppUrl}/productos/${id}`);
  }

}
