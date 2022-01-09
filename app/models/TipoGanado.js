export default class TipoGanado{
    constructor(
        idTipoGanado,
        descripcion,
        estado
    ){
        this.idTipoGanado = idTipoGanado;
        this.descripcion = descripcion;
        this.estado = estado
    }
    route(){
        return("TipoGanado")
    }
}