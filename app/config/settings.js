/* eslint-disable */
import React, {  } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
//import resFile from '../res/app_es.json';
import './global';

const resFile = require("../res/app_es.json")
const localDB = '@configDB:';

export async function getConfig(key) {
    return new Promise((resolve, reject) => {
        // Se va a usar AsyncStorage para persistencia
        try {
            AsyncStorage.getItem(localDB + key).then(value=>{
                console.log('GetConfig', `${key} ${value}`);
                return resolve(value)
            });
        }
        catch(error) {
            console.error("Error al cargar configFile");
            console.error(error);
            return resolve(null);
        }
    })    
}

export async function setConfig(key, value) {
    try {
        await AsyncStorage.setItem(localDB + key, value)
        console.log('SetConfig', `${key} ${value}`)
    } catch(e) {
        // save error
        console.log('Setconfig error', e)
        return false
    }
    return true
}

export async function setConfig2(key, value) {
    // Se va a usar AsyncStorage para persistencia
    try {
        if ((key !== undefined || key !== null) && value != undefined) {
            await AsyncStorage.setItem(localDB + key, value);
            return true;
        }
    }
    catch(error) {
        //mensaje
        console.error("Error al cargar configFile");
        console.error(error);
    }
    return (false);
}

export function init() {
    console.log("Consulta de Configuraiones");
    setConfig('idPersona', '');
    setConfig('idUsuario', '');
    setConfig('logged', 'false');
    setConfig('lang', 'es');
    setConfig('fcmToken', '');
    setConfig('accessToken', '');
    //setConfig('proyectosApi', '');
    setConfig('politica', 'false');
}

export function loadSettings() {
    //Almacena los datos iniciales
    return new Promise((resolve, reject) => { 
        var _value = null;
        getConfig("idPersona").then((value) => { 
            _value = 1;
            if (value === null || value === undefined) {
                init();
            }
            getConfig("lang").then((lang) => {
                if (lang === 'es') {
                    global.resFile = resFile;
                }
                else {
                    global.resFile = resFile;
                }
                global.lang = lang
                return resolve('OK')
            });
        });
    })

}

export const configCalendar ={
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['Ene.','Feb.','Mar.','Abr.','May.','Jun.','Jul.','Ago.','Sep.','Oct.','Nov.','Dic.'],
    dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'],
    dayNamesShort: ['D','L','M','M','J','V','S'],
    today: 'Hoy'
  };
