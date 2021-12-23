/* eslint-disable */
import React from 'react';
import { Toast } from 'native-base';

/**
 * @description Mensajes Tipo Toast, se debe de importar el componente Toast de NativeBase desde el componente dde donde sea llamado
 * @param {string} text Mensaje a Mostrar
 * @param {number} duration Duración en milisegundos
 * @param {string} position Posición del mensaje (top, bottom)
 * @param {string} buttonText Texto si lleva algun boton
 */
export function toast(text, duration, position, buttonText) {
    
    Toast.show({
        text: text,
        position: position,
        duration: duration,
        buttonText: buttonText,
    });
    
} 

/**
 * @description Mensajes Tipo Log de consola
 * @param {any} object Objetio a Mostrar
 * @param {any} object Objetio a Mostrar
 * @param {any} tipoMensaje 0 - Log, 1 - Warning, 2 - Error
 */
export function log(object, tipoMensaje) {

    if (tipoMensaje === 1) {
        console.warn(object);
        // if (object2 !== undefined)
        //     console.warn(object2);
    }
    else if (tipoMensaje === 2) {
        console.error(object);
        // if (object2 !== undefined)
        //     console.error(object2);
    }
    else {
        console.log(object);
        // if (object2 !== undefined)
        //     console.log(object2);
    }

}