import { Categoria } from './Categoria';

export class Gastos{
    id:number;
    nombre_gasto:string;
    fecha:any=new Date();
    cantidad_gasto:number;
    user_id:number;
    categoria_id:number;
    categorias:Categoria

}