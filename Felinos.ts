import { Mascotas } from "./Mascotas";
export class Felinos extends Mascotas{
    mostrarfelinos(){
        console.log("FELINOS");
        console.log("el nombre del felino es: "+this.nombre);
        console.log("el tipo de animal felino es: "+this.tipo);
        console.log("la rraza del felino es: "+this.rraza)

    }
    
}