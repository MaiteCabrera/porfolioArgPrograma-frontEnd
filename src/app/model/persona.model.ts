export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
/* el id es autogenerado*/
    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}