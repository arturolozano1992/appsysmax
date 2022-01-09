export default class Turno{
    constructor(
        idChofer,
        idComerciante,
        fecha,
        idTipoGanado,
        codCSMI,
        placaVehiculo,
        cantidadGanado,
        nomChofer,
        idTurno,
        usuarioCrea,
        fechaCrea,
        usuarioModi,
        fechaModi
    ){
        this.idComerciante = idComerciante;
        this.fecha = fecha;
        this.idTipoGanado = idTipoGanado;
        this.codCSMI = codCSMI;
        this.placaVehiculo = placaVehiculo;
        this.idChofer = idChofer;
        this.cantidadGanado = cantidadGanado;
        this.nomChofer = nomChofer;
        this.idTurno = idTurno;
        this.usuarioCrea = usuarioCrea;
        this.fechaCrea = fechaCrea;
        this.usuarioModi = usuarioModi;
        this.fechaModi = fechaModi;
    }
    route(){
        return "turno"
    }
}