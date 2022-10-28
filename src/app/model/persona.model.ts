export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
/*El id es autogenerado*/
    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}