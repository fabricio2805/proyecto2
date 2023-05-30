import { Mascotas } from "./Mascotas";
export class Caninos extends Mascotas{
nostrarcaninos(){
    console.log("CANINOS");
    console.log("el nombre del canino es: "+this.nombre);
    console.log("el tipo de animal canino es: "+this.tipo);
    console.log("la rraza del canino es: "+this.rraza)
}
}