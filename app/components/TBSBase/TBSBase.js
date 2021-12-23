import React, { Component } from 'react'
import { theme } from '../config/theme'

/**
 * Clase Componente base, todos lo otros componentes deben de heredarla
 * Con funciones específicas o generales para cada Componente
 */
export default class TBSBase extends Component {

    id;     // Id unico del objeto
    ref;    // Referencia al Componente
    components = new Map();
    constructor(props) {
        super(props);
        
        this.theme = theme
        this.navigate = props.navigation ? props.navigation.navigate : null;
        this.params = props.navigation ? (props.navigation.state.params ? props.navigation.state.params : null) : null;
    }

    /**
     * @description Retorna el componente instanciado previamente
     * @param {String} name Nombre del Componente a obtener
     * @return {Component} Componente
     */
    getRef(name) {
        try {
            return this.components.get(name);    
        } catch (error) {
               
        }
        return null
    }

    /**
     * @description Setea la referencia de un componente
     * @param {String} id - Id del componente en String
     * @param {Any} ref - Referencia al componente
     */
    setRef(id, component) {
        this.components.set(id, component);
    }

    /**
     * @description Retorna el campo value de componentes 
     * @return {String} Valor
     */
    getValue() {
        return (this.state.value);
    }

    /**
     * @description Setea un valor al componente y generé el render del mismo
     * @param {Any} value - Valor a setear al componente
     */
    setValue(value) {
        try {
            if (value !== undefined && value !== null)
                this.setState({value});
        } catch (error) {
            //Mensaje
        }
    }
}
