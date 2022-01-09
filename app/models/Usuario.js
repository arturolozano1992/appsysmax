export default class Usuario{
    constructor(
        idComerciante,
        usuario,
        token,
        estado,
        usuarioCrea,
        fechaCrea,
        usuarioModi,
        fechaModi
    ){
        this.idComerciante = idComerciante;
        this.usuario = usuario;
        this.token = token;
        this.estado = estado;
        this.usuarioCrea = usuarioCrea;
        this.fechaCrea = fechaCrea;
        this.usuarioModi = usuarioModi;
        this.fechaModi = fechaModi;
    }
    route(){
        return "usuario";
    }
}