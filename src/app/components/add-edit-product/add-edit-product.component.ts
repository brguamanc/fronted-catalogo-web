import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/products';
@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, ],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  form:FormGroup;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      nombre:['',Validators.required],
      marca:['',Validators.required],
      descripcion:['',Validators.required],
      precio:[null,Validators.required],
      cantidad:[null,Validators.required],
      imagen:[''],
    })
  }


}
