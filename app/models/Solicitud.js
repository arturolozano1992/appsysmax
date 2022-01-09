export default class Solicitud{
    constructor(
            idSolicitud,
            idComerciante,
            estado,
            usuarioAprueba,
            fechaAprobacion,
            observacion,
            usuarioCrea,
            fechaCrea,
            usuarioModi,
            fechaModi
    ){
        this.idSolicitud = idSolicitud;
        this.idComerciante = idComerciante;
        this.estado = estado;
        this.usuarioAprueba = usuarioAprueba;
        this.fechaAprobacion = fechaAprobacion;
        this.observacion = observacion;
        this.usuarioCrea = usuarioCrea;
        this.fechaCrea = fechaCrea;
        this.usuarioModi = usuarioModi;
        this.fechaModi = fechaModi;
    }
    route(){
        return "solicitud"
    }
}