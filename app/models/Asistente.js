export default class asistente{
constructor(
    idAsistente,
    idComerciante,
    tipoDocumento,
    identificacion,
    nombres,
    apellidos,
    estado,
    usuarioCrea,
    fechaCrea,
    usuarioModi,
    fechaModi
){
    this.idAsistente = idAsistente;
    this.idComerciante = idComerciante;
    this.tipoDocumento = tipoDocumento;
    this.identificacion = identificacion;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.estado = estado;
    this.usuarioCrea = usuarioCrea;
    this.fechaCrea = fechaCrea;
    this.usuarioModi = usuarioModi;
    this.fechaModi = fechaModi
}
route(){
    return "asistente"
}
}