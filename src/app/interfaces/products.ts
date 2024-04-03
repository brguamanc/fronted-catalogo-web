export interface ApiResponse <T>{
    status?:string;
    data:T
}

export interface Product{
    _id?:string;
    nombre:string;
    marca:string;
    descripcion:string;
    precio:number;
    cantidad:number;
    imagen:string;
    createdAt:string;
    updatedAt:string;
    
}
export interface Catalogo{
    nombre:string;
    marca:string;
    descripcion:string;
    precio:number;
    cantidad:number;
    url_imagen:string;
}
export interface Imagenes{
    _id?:string;
    url_original:string;
    createdAt:string;
    updatedAt:string;
    cloudinary_url:{
        public_id:string;
        url:string;
    }
}