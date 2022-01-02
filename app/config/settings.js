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
            //alert(localDB + key)
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
        //alert(JSON.stringify(value))
        await AsyncStorage.setItem(localDB + key, value)
        //alert('SetConfig', `${key} ${value}`)
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
    //alert("Consulta de Configuraiones");
    /*setConfig('idUsuario', '');
    setConfig('logged', 'false'); */
    setConfig('lang', 'es');
    //alert(JSON.stringify(resFile))
    setConfig('config',JSON.stringify(resFile) );
    /* setConfig('fcmToken', '');
    setConfig('accessToken', ''); */
    //setConfig('politica', 'false');
}

export function loadSettings() {
    //Almacena los datos iniciales
    return new Promise((resolve, reject) => { 
        var _value = null;
        //alert(resFile)
        getConfig("lang").then((lang) => {
            getConfig("config").then((config)=>{
                //alert(config)
                if (lang === 'es') {
                    global.resFile = JSON.parse(config);
                }
                else {
                    global.resFile = resFile;
                }
                global.lang = lang
                return resolve('OK')
            })

            
            
            
        });
       /*  getConfig("idPersona").then((value) => { 
            _value = 1;
            if (value === null || value === undefined) {
                init();
            }
            
        }); */
    })

}

export const configCalendar ={
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['Ene.','Feb.','Mar.','Abr.','May.','Jun.','Jul.','Ago.','Sep.','Oct.','Nov.','Dic.'],
    dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'],
    dayNamesShort: ['D','L','M','M','J','V','S'],
    today: 'Hoy'
  };
