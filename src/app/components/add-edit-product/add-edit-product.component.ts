import { Component, EventEmitter, Input,  Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../interfaces/products';
import { ProductoService } from '../../services/producto.service';
import { ToastrService } from 'ngx-toastr';
import {Storage,getDownloadURL,ref,uploadBytes} from '@angular/fire/storage'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, ],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent  {

  id:string;
  imagen!:Object;
  data: Product | null = null;
  operacion:string = 'Crear '
  loading: boolean = false;
  downLoadUrl!:string;
  @Output() onCloseModel = new EventEmitter();
  form:FormGroup;


  constructor(
    private storage:Storage,
    private fb:FormBuilder,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private aRouter:ActivatedRoute,
    private router:Router
    ){
      this.id = String(aRouter.snapshot.paramMap.get('id'))
      console.log(aRouter.snapshot.paramMap.get('id'))
    this.form=this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl(null, [Validators.required]),
      cantidad: new FormControl(null, [Validators.required]),
      imagen: new FormControl(''),
    })
  }
  selectImagen($event:any){
    this.imagen =  $event.target.files[0]
  }
 
  async uploadFirebase(file:any){
    const uniqueSuffix = Math.round(Math.random() * 1E5)
    const ext = file.name.split('.').pop()
    const filePath = 'catalogo/'+uniqueSuffix+'.'+ext
    const imgRef = ref(this.storage,filePath)
    const uploadFile = await uploadBytes(imgRef,file)
    this.downLoadUrl =await getDownloadURL(imgRef)
    this.form.patchValue({
      imagen: this.downLoadUrl
    });
  }


  ngOnInit(): void {
    if(this.id != "null"){
      this.operacion='Editar '
      this.getProductSelecionado()
    }
    
    
  }
  
  getProductSelecionado(){
    this.loading = true;
    this.productoService.getProduct(this.id).subscribe({
      next:(response)=>{
        this.data=response.data;
        this.loading = false;
        this.form.patchValue({
          nombre: this.data.nombre,
          marca: this.data.marca,
          descripcion: this.data.descripcion,
          precio: this.data.precio,
          cantidad: this.data.cantidad,
          imagen: this.data.imagen
        });
      }
    })
  }
  onClose() {
    this.onCloseModel.emit(false);
  }

  async onSubmit() {
    if (this.form.valid) {
      if (this.id != "null") {
        this.loading = true;
        if (this.imagen){
          await this.uploadFirebase(this.imagen )
        }else{
          this.form.patchValue({
            imagen: ""
          });
        }
        this.productoService
          .updateProduct(this.id, this.form.value)
          .subscribe({
            next: (response: any) => {
              this.resetEmployeeForm();
         
              this.toastr.success("Producto editado correctamente");
            },
          });
          this.loading = false;
      } else {
        this.loading = true;
        if (this.imagen){
          await this.uploadFirebase(this.imagen )
        }
        this.productoService.createProduct(this.form.value).subscribe({
          next: (response: any) => {
            this.resetEmployeeForm();
            this.toastr.success("Producto agregado correctamente");
          },
        });
        this.loading = false;
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetEmployeeForm() {
    this.form.reset();
    this.router.navigate(['/home'])
  }
}


