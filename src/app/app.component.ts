import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, ListProductsComponent,CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule,CatalogoComponent]
})
export class AppComponent {
  title = 'fronted-catalogo-web';
}
