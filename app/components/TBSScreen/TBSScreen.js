/* eslint-disable */
import React, { Component } from 'react'
import { View, Text, SafeAreaView, KeyboardAvoidingView, StatusBar, Platform, ImageBackground, Image } from 'react-native'
import { style } from './style'
import TBSBase from '../TBSBase';
import TBSHeader from '../TBSHeader/TBSHeader';
import { Container, Content, Header, Button, Icon, Body, Title, Right, Left } from 'native-base';
import { theme } from '../config/theme';
import "../../config/global";
import TBSAlert from '../TBSAlert';

export default class TBSScreen extends TBSBase {

    constructor(props) {
        super(props)

        this.pasoValidacion = false;

    }


    componentDidUpdate() {
        const { capacidad, navigation } = this.props;
        // global.usuario.capacidad = '[{"id":9,"val":false},{"id":13,"val":true},{"id":14,"val":true}]';
        return;
        try {
            if (global.usuario.capacidad && this.pasoValidacion === false) {
                this.pasoValidacion = true;
                let permitir = false;
                let capacidades = JSON.parse(global.usuario.capacidad);
                capacidades.forEach(it => {
                    if (it.id === capacidad.id && it.val === true) {
                        permitir = true;
                    }
                });
                if (!permitir) {
                    //if (capacidad.val === "pizarra") {
                    //this.alert.error("Pizarra no se encuentra disponible", null, ()=>navigation.navigate("Invitados"), null, "Acceso denegado")
                    //navigation.navigate("Invitados");
                    if (capacidad.val === "appInvitados") {
                        this.pasoValidacion === false;
                        this.alert.error("Invitados no se encuentra disponible", null, () => navigation.navigate("Pizarra"))
                    } else if (capacidad.val === "appReservas") {
                        this.pasoValidacion === false;
                        this.alert.error("Reservas no se encuentra disponible", null, () => navigation.navigate("Pizarra"))
                    } else if (capacidad.val === "appEditarCuenta") {
                        this.pasoValidacion === false;
                        this.alert.error("Editar Cuenta no se encuentra disponible", null, () => navigation.navigate("Pizarra"))
                    } else if (capacidad.val === "appEstadoCuenta") {
                        this.pasoValidacion === false;
                        this.alert.error("Estado de Cuenta no se encuentra disponible", null, () => navigation.navigate("Pizarra"))
                    } else if (capacidad.val === "appComercios") {
                        this.pasoValidacion === false;
                        this.alert.error("Comercios no se encuentra disponible", null, () => navigation.navigate("Pizarra"))
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { header, headerTitle, styleNotch, styleContainer, styleContent, left, right, bounces, iosBarStyle, transparent, normalBackground, login, capacidad } = this.props;

        return ( 
            <Container style = {[style.container, styleContainer] } >
            {
                header &&

                    <TBSHeader styleHeader = { style.header }
                    title = { headerTitle || 'Cabecera Pantalla' }
                    left = { left } 
                    right = { right }/>
                    } 
                    <StatusBar translucent backgroundColor = "transparent"
                        barStyle = "dark-content"
                        animated />
                        <Content id = "TBSScreenContent" ref = {(ref) => this.setRef("TBSScreenContent", ref)}
                                bounces = { bounces || false }
                                style = {
                                    [style.content, styleContent, { marginTop: normalBackground ? 0 : 30 }]
                                } > 
                                { this.props.children } 
                                <TBSAlert ref = {(ref) => this.alert = ref}/>

                        </Content>

            </Container>
        )
    }
}