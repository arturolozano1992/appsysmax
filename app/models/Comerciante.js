export default class Comerciante{
    constructor(
                idComerciante,
                tipoDocumento,
                identificacion,
                nombres,
                apellidos,
                idTipoGanado,
                telefono,
                correo,
                direccion,
                estado,
                usuarioCrea,
                fechaCrea,
                usuarioModi,
                fechaModi
    ){

        this.idComerciante = idComerciante;
        this.tipoDocumento = tipoDocumento;
        this.identificacion = identificacion,
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.idTipoGanado = idTipoGanado;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
        this.estado = estado;
        this.usuarioCrea = usuarioCrea;
        this.fechaCrea = fechaCrea;
        this.usuarioModi = usuarioModi;
        this.fechaModi = fechaModi
    }
    route(){
        return "comerciante"
    }
}