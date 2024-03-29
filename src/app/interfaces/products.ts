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
    imagen:string;
}