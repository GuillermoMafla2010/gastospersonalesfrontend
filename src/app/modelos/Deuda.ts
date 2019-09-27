export class Deuda{
    id: number;
    nombre_deuda: string;
    fecha: any = new Date();
    usuario_id: number;
    cantidad: number;
    pagado: number;
    cuota: number;
}