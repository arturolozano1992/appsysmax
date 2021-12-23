/* eslint-disable */
//VARIABLES GLOBALES
var resFile = null;
var opciones = null;
var user = null;
var lang = 'es';
var accessToken = null;
//variable global de api proyectos
var proyectosApi = [];
//FILTRO DE OPCIONES
export function opcionesData(key) {
    try {

           let value = global.opciones.filter(f => {
            return f.nombre == key;
        })
        return value[0].valor;
    } catch (error) {
        return null;
    }
}

//OBJETOS GLOBALES
export const app = {
    name: "Urbanizaciones",
    version: '0.0.1'
}
Object.freeze(app);

export const personaEstado = {
    activo: "A",
    inactivo: "I"
}
Object.freeze(personaEstado);

export const tipoPizarra = {
    publicacion: "PUB",
    encuesta: "ENC",
    comunicado: "COM"
}
Object.freeze(tipoPizarra);

export const tipoInvitacion = {
    horas: "HOR",
    temporal: "TEM"
}
Object.freeze(tipoInvitacion);
export const dataPost ={
    server:"http://200.32.68.237",
    url:"APIInmobiliario/Token",
    userName:"PORTALDECLIENTE",
    password:"Portal2019$$",
    grantType:"password",
    url2:"ApiInmobiliario/Cuidemonos/ConsultarProyectosUsuario?cedula="
}
Object.freeze(dataPost);