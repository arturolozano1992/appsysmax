/* eslint-disable */
import React from "react";
import TBSBase from "../TBSBase";
import { SectionList, FlatList, styleheet, Platform, RefreshControl, Modal } from "react-native";
import { View, Card, CardItem, Body, Right, Left, Button, Icon, StyleProvider } from "native-base";

import TBSButton from "../TBSButton";
import { images } from "../../config/images";
import TBSText from "../TBSText";
import {style} from "./style";
import TBSTitle from "../TBSTitle";
import TBSModal from "../TBSModal";
import LinearGradient from 'react-native-linear-gradient';
import { theme } from "../config/theme";


export default class TBSAlert extends TBSBase {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.info = this.info.bind(this);
        this.error = this.error.bind(this);
        this.hide = this.hide.bind(this);
        this.message = this.message.bind(this);
        
        this.state = {
            value: null,//this.props.value,
            success: false,
            info: false,
            error: false,
            title: null
        }; 
    }

    show(value, type, onPress1, onPress2, title, boton1, boton2) {
        this.message(value, type, onPress1, onPress2, title, boton1, boton2, null, true, null, null);
    }

    info(value, type, onPress1, onPress2, title, boton1, boton2) {
        this.message(value, type, onPress1, onPress2, title, boton1, boton2, true, null, null, null);
    }

    error(value, type, onPress1, onPress2, title, boton1, boton2) {
        this.message(value, type, onPress1, onPress2, title, boton1, boton2, null, null, true, null);
    }

    politica(value, type, onPress1, onPress2, title, boton1, boton2) {
        this.message(value, type, onPress1, onPress2, title, boton1, boton2, null, true, null, 16);
    }

    message(value, type, onPress1, onPress2, title, boton1, boton2, info, success, error, fontSize) {
        if (!type) {
            data = <Body><TBSText styleText={[style.bodyCardText, {fontSize: fontSize}]} value={value}/></Body>;
        }
        else {
            data = <Body>{value}</Body>;
        }
        
        this.setState({value: data, onPress1, onPress2, info, success, error, title, boton1, boton2});
    }

    hide() {
        this.setState({value: null})
    }

    render () {
        if (!this.state.value)
            return (null);
        
        const { titulo, cuerpo, boton1, boton2, boton1Press, boton2Press, type, modalCard, titleText, icon, styleButton, styleTextButton, close, info, success, error } = this.props;
        let justifyContent = "center";
        if (boton2) {
            justifyContent = "space-between";
        }
        if (this.state.onPress2) {
            justifyContent = "space-between";
        }
        let color1 = theme.colors.gdColorInfo1;
        let color2 = theme.colors.gdColorInfo2;
        let _titulo = this.state.title;
        
        if (success || this.state.success) {
            color1 = theme.colors.gdColorSuccess1;
            color2 = theme.colors.gdColorSuccess2;
        }
        else if (error || this.state.error) {
            _titulo = _titulo || "Error";
            color1 = theme.colors.gdColorError1;
            color2 = theme.colors.gdColorError2;
        }

        color1 = "#ffffff";
        color2 = "#ffffff";
        
        if (!_titulo)
            _titulo = _titulo || "Información";

        if (titulo)
            _titulo = titulo;
        
        return(
            // <Fragment>
            <Modal
                animationType="fade"
                transparent={true}
                onRequestClose={() => {
                    null;
                }}
            >
                <View style={[style.container]} >
                    <View style={[style.innerContainer]}>
                        <Card style={[style.card, modalCard]}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[color1, color2]} style={style.card}>
                                {this.state.title && <CardItem header style={[style.headerCard]}>
                                    <Left>
                                        <TBSTitle styleTitle={[style.titleText, titleText]} value={_titulo}/>
                                    </Left>
                                   
                                </CardItem>}
                                <CardItem style={[style.bodyCard]}>
                                    {this.state.value}
                                    
                                </CardItem>
                                <CardItem footer style={[style.footerCard, {justifyContent}]}>
                                    
                                    {this.state.onPress2 &&
                                    <TBSButton
                                        small
                                        //outlineButton
                                        textButton
                                        value={this.state.boton2 || "Cancelar"}
                                        onPress={boton2Press || this.hide}
                                        styleButton={{marginLeft: 30}}
                                        styleText={{color: "#E93D04", fontSize: theme.fontSize.body2}}
                                    />}
                                    <TBSButton
                                        medium
                                        rounded
                                        //outlineButton
                                        value={this.state.boton1 || "Aceptar"}
                                        onPress={()=> {
                                            try {this.state.onPress1();} catch (error) {}
                                            this.hide();
                                        }}
                                        //styleButton={styleButton}
                                        //styleButton={{backgroundColor: "transparent", borderColor: "#ffffff", borderWidth: 0.66,}}
                                        //styleText={styleTextButton}
                                        //styleText={{color: "#ffffff", fontSize: theme.fontSize.body1}}
                                    />
                                </CardItem>
                            </LinearGradient>
                        </Card>
                    </View>
                </View>
            </Modal>
            // </Fragment>
        );
    }

}