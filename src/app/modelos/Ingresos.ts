
import { Categoria } from './Categoria';
export class Ingresos{
    id:number;
    fecha:any=new Date();
    cantidad_ingreso:number;
    nombre_ingreso:string;
    user_id:number;
    categoria_id:number;
    categorias:Categoria

} 