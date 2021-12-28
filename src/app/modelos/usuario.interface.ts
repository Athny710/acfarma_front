import { Rol } from "./rol.interface"

export class Usuario{
    id:number=0;
    nombre:string="";
    correo:string="";
    pass:string="";
    dni:string="";
    estado:number=0;
    rol: Rol= new Rol;
}