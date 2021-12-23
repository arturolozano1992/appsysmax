/* eslint-disable */

import { log } from "../TBSMessage";
import '../../config/global';
var moment = require('moment');

export function getText(key) {
    try {
        var value = global.resFile[key];
        if (value !== "")
            return value;
        else
            return "";
    }
    catch(error) {
        log('Error al cargar el archivo de strings: ' + error, 2);
    }
}

export function validateForms(refs) {
    let message = null;
    let counter = 0;
    for (let it of refs) {
        counter++;
        try {
            if (it[1]) {
                let props = it[1].props;
                let state = it[1].state;
                if (props.isRequired) {
                    if (!state.value || state.value.toString().trim() === "") {
                        if (!props.value || props.value.toString().trim() === "") {
                            message = props.message;
                            break;
                        }
                    }
                }
            }
        } catch (error) {
            log(error);
        }
    }
    return message;
}

/**
 * @description Genera un ID único
 * @returns {String} ID único
 * */
export function getUUID() {
    var d = new Date().getTime();
    if(Date.now){
        d = Date.now(); //high-precision timer
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export function setIdiomaMoment(lang) {
    if (lang === undefined || lang === null)
        lang = 'es'
    if (lang === 'es')
        require(`moment/locale/es`);
    
}
export const momento = moment;
export const fecha = _fecha();
//export const fechaFirebase = _fechaFirebase(fecha);
function _fecha() {
    var day = moment().get("date");
    var month = moment().get("month");
    var year = moment().get("year");
    if (day < 10)
        day = `0${day}`;
    if (month < 10)
        month = `0${month}`;
    // console.log("Dia => " + moment().get("date"));
    // console.log((`fecha=>  ${day}-${month}-${year}`));
    return (`${day}-${month}-${year}`);
}

/**
 * @description Funcion para convertir un string de do digitos con un 0 delante
 * @param {string} String a convertir 
 * @param {llenar} Llenar con que string se llenará digitos
 * @param {digitos} Digitos el numero de digitos que seran reemplazado con el parametro llenar
 * @returns {value} valor devuelto
 * */
export function formatoDate(string, llenar, digitos) {
   var value = string;
    try {
        value = string.padStart(digitos, llenar)
    } catch (error) {
        log(error)
        return string
    }
    log(value)
    return(value);
}

/**
 * @description Funcion para convertir una fecha formato DD-MM-YYYY en tipo Date
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato Date
 * */
export function formatoFechaJS(fecha) {
    /*console.log("fecha");
    console.log(fecha)*/
    let _fecha = moment();
    try {
        _fecha.year(fecha.substr(6,4)).valueOf();
        _fecha.month(fecha.substr(3,2) - 1).valueOf();
        _fecha.date(fecha.substr(0,2)).valueOf();
        // _fecha.hours(0).valueOf();
        // _fecha.minutes(0).valueOf();
        // _fecha.seconds(0).valueOf();
    } catch (error) {

    }
    return(_fecha.toDate());
}

/**
 * @description Funcion para convertir una fecha en numero con formato YYYYMMDD
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato YYYYMMDD numerico
 * */
export function formatoFechaJS2(fecha) {
    let _fecha = moment(fecha);
    return(parseInt(_fecha.format('YYYYMMDD')));
}

/**
 * @description Funcion para convertir una fecha en numero con formato MMMM DD
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato MMMM DD string
 * */
export function formatoFechaJS3(fecha) {
    //console.log(fecha)
    let _fecha = moment(fecha);
    return(_fecha.format('MMMM DD'));
}

/**
 * @description Funcion para convertir una fecha en string a formato DD-MM-YYYY
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato DD-MM-YYYY string
 * */
export function formatoFechaJS4(fecha) {
    let _fecha = moment(fecha);
    return(_fecha.format('DD-MM-YYYY'));
}

/**
 * @description Funcion para convertir una fecha en string a formato DD-MM-YYYY h:mm
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato DD-MM-YYYY h:mm string
 * */
export function formatoFechaJS5(fecha) {
    let _fecha = moment(fecha);
    return(_fecha.format('DD-MM-YYYY HH:mm'));
}

/**
 * @description Funcion para convertir una fecha en string a formato HH:mm
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato HH:mm string
 * */
export function formatoFechaJS6(fecha) {
    let _fecha = moment(fecha);
    return(_fecha.format('HH:mm'));
}

/**
 * @description Funcion para convertir una fecha en string a formato DD-MMM-YYYY HH:mm
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato DD-MMM-YYYY HH:mm string
 * */
export function formatoFechaJS7(fecha) {
    let _fecha = moment(fecha);
    return(_fecha.format('DD-MMM-YYYY HH:mm'));
}

/**
 * @description Funcion para convertir una fecha en string a formato YYYY
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato YYYY string
 * */
export function formatoFechaJS8(fecha) {
    let _fecha = moment(fecha);
    return(_fecha.format('YYYY'));
}

/**
 * @description Funcion para convertir una fecha en string a formato YYYY-MM-DD
 * @param {fecha} Fecha fecha a convertir
 * @returns {value} Fecha en formato DD-MM-YYYY string
 * */
export function formatoFechaJS9(fecha) {
    let _fecha = moment(fecha);
    return(_fecha.format('YYYY-MM-DD'));
}

export function addDays(value, dias) {
    let _fecha = moment(value);
    _fecha.add(dias, 'd');
    //console.log(_fecha);
    //console.log(_fecha.toDate());
    return(_fecha.toDate());
}

export function convertGMT(gmt, hora) {
    let gmtTemp = gmt//-300
    let fechaTemp = momento().hours(hora.split(':')[0]).minute(hora.split(':')[1]).seconds(0)
    let gmtActual = momento().utcOffset()
    let gmtCalculado = gmtTemp
    let _hora = hora
    try {
        gmtCalculado = (gmtTemp - gmtActual) * -1
        fechaTemp = momento().hours(hora.split(':')[0]).minute(hora.split(':')[1]).seconds(0)
        fechaTemp.add(gmtCalculado, 'minutes')
        _hora = fechaTemp.format(getString('formatTimePicker'))
    } catch (error) {
        console.log(error)
    }
    return _hora
    
}

/**
 * @description Llena de 0 una cadena
 * @param {String} str cadena
 * @param {int} max tamaño
 * @returns {String} cadena con 0
 * */
export function pad(str, max) {
    str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;

}

/**
 * @description Funcion que devielve el mes String (Enero) de un mes entero (1)
 * @param {int} Mes en entero
 * @returns {String} Mes largo como string
 * */
export function mesTexto(mes) {

    if (mes === 1)
        return "Enero";
    else if (mes === 2)
        return "Febrero";
    else if (mes === 3)
        return "Marzo";
    else if (mes === 4)
        return "Abril";
    else if (mes === 5)
        return "Mayo";
    else if (mes === 6)
        return "Junio";
    else if (mes === 7)
        return "Julio";
    else if (mes === 8)
        return "Agosto";
    else if (mes === 9)
        return "Septiembbre";
    else if (mes === 10)
        return "Octubre";
    else if (mes === 11)
        return "Noviembre";
    else if (mes === 12)
        return "Diciembre";
    else
        return "";
}

/**
 * @description Normalizar strings, quitar tildes y reemplazar vocal correspondiente
 * @param {string} Texto a normalizar
 * @returns {String} Texto normalizado
 * */
export var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};
   
    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
   
    return function( str ) {
        var ret = [];
        for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
                ret.push( mapping[ c ] );
            else
                ret.push( c );
        }      
        return ret.join( '' );
    }
   
  })();