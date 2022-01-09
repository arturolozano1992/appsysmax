/* eslint-disable */
import React, { Fragment } from "react";
import TBSBase from "../../components/TBSBase";
import { createDrawerNavigator } from "react-navigation";
//import { zoomIn, fromLeft, fromRight } from 'react-navigation-transitions';
import { Root } from "native-base";
import RegistraTurnos from "../app/screens/RegistraTurnos";
import ConsultaTurnos from "../app/screens/ConsultaTurnos";
import EditarPerfil from "../app/screens/EditarPerfil";

import "../../config/global";


const SideMenu = createDrawerNavigator ({
        RegistraTurnos: {screen: RegistraTurnos, navigationOptions: (props) => ({
    })},

    ConsultaTurnos: {screen: ConsultaTurnos, navigationOptions: (props) => ({
    })},

    EditarPerfil: {screen: EditarPerfil, navigationOptions: (props) => ({
    })},
{
    drawerPosition: 'left',
    //drawerLockMode:'locked-closed',
    drawerWidth: 300,//styleBase.deviceWidth * 0.80,
    contentOptions: {
        labelStyle: {
            //fontSize: styleBase.textFontSize_01,
            //fontFamily: styleBase.fontFamily,
            //color: colors.text_03,
            //marginLeft: 10,
            //marginTop: 20,
        },
    },
    swipeEnabled: true,
})
export default class Home extends TBSBase {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        
    }

    
    render() {
        
        return (
            <Root>
                <SideMenu/>
            </Root>
            
        )
    }

}