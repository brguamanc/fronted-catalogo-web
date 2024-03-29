import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
export const routes: Routes = [
    {path:'',component:CatalogoComponent},
    {path:'home',component:ListProductsComponent},
    {path:'add',component:AddEditProductComponent},
    {path:'edit/:id',component:AddEditProductComponent},
    {path:'**',redirectTo:'home',pathMatch:'full'}
];
