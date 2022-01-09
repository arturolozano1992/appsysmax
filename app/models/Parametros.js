export default class Parametros{
    constructor(
        valor,
        descripcion,
        tabla
    ){
        this.valor = valor;
        this.descripcion = descripcion;
        this.tabla = tabla;
    }
    route(){
        return ("parametros")
    }
}