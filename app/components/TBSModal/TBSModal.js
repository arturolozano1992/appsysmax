// Seccion de Imports
import React, { Component } from "react";
import { StyleSheet, Modal, Text } from "react-native";
import { View, Card, CardItem, Body, Right, Left, Button, Icon, StyleProvider } from "native-base";
import TBSBase from "../TBSBase";
import TBSText from "../TBSText";
import {style} from  "./style";
import TBSButton from "../TBSButton";
import TBSTitle from "../TBSTitle";

export default class TBSModal extends TBSBase {

    constructor (props) {
        super(props);
        this.state = {
            value: this.props.value
        };        
    }

    render () {
        const { titulo, cuerpo, boton1, boton2, boton1Press, boton2Press, type, modalCard, titleText, icon, styleButton, styleTextButton, close } = this.props;
        let justifyContent = "space-between";
        if (boton2 === undefined) {
            justifyContent = "center";
        }
        
        return(
            // <Fragment>
            <Modal
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    null;
                }}
            >
                <View style={[style.container]} >
                    <View style={[style.innerContainer]}>
                        <Card style={[style.card, modalCard]}>
                            <CardItem header style={[style.headerCard]}>
                                <Left>
                                    {/* <TBSText style={[style.titleText, titleText]} value={titulo}/> */}
                                    <TBSTitle styleTitle={[style.titleText, titleText]} value={titulo}/>
                                </Left>
                                <Right>
                                    {
                                        close &&
                                        <Button transparent onPress={()=>close()}>
                                            {
                                                !icon ?
                                                    <Icon type="FontAwesome" name="times" style={[style.iconClose]} />
                                                    :
                                                    <Icon type="FontAwesome" name="times" style={[style.iconClose, icon.style]} />
                                            }
                                        </Button>
                                    }
                                </Right>
                            </CardItem>
                            <CardItem style={[style.bodyCard]}>
                                {   
                                    type == 1 ?
                                        <Body>
                                            {cuerpo}
                                        </Body>
                                        :
                                        <TBSText value={cuerpo}/>
                                }
                            </CardItem>
                            <CardItem footer style={[style.footerCard, {justifyContent}]}>
                                <TBSButton
                                    medium
                                    rounded
                                    value={boton1}
                                    onPress={boton1Press}
                                    styleButton={styleButton}
                                    styleText={styleTextButton}
                                />
                                {boton2 !== undefined && 
                                <TBSButton
                                    small
                                    rounded
                                    textButton
                                    value={boton2}
                                    onPress={boton2Press}
                                    //style={[style.button1]}
                                    //style2={[style.button2]}
                                    //style3={[style.button3]}
                                />}
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </Modal>
            // </Fragment>
        );
    }


}
