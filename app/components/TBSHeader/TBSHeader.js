/* eslint-disable */
// Seccion de Imports
import React from 'react';
import { TouchableOpacity, View } from 'react-native'
//import SvgUri from 'react-native-svg-uri'
import {style} from './style'
import TBSBase from '../TBSBase'
import TBSTitle from '../TBSTitle';
//import Icon from "react-native-vector-icons/Feather";
import { Thumbnail, Icon, Header } from 'native-base';
import { theme } from '../config/theme';

export default class TBSHeader extends TBSBase {

    constructor (props) {
        super(props);
        
    }
    
    render () {
        const { styleHeader, title, left, right, rightImage, transparent, iosBarStyle} = this.props;

        return (
            <Header style={[style.header, styleHeader]} transparent={transparent || false}>
                {
                    left &&
                    <TouchableOpacity onPress={() => left.action()} style={style.left} >
                        <Icon name={left.icon} style={[style.leftIcon]} type={"FontAwesome5"} />
                    </TouchableOpacity>
                }
                {
                    title &&
                    <View style={style.body}>
                        <TBSTitle 
                            value={title} styleTitle={{fontSize: theme.fontSize.h6}} />
                    </View>
                }
                {
                    right &&
                    <TouchableOpacity onPress={() => right.action()} style={style.right}>
                        {/* <Thumbnail source={right.icon} style={[{width:40, height:40}, right.style]} /> */}
                        <Icon name={right.icon} style={[style.leftIcon]} type={"FontAwesome5"} />
                    </TouchableOpacity>
                }
            </Header>
        );
        /*
        <Header style={{backgroundColor:"#ff0000"}}>
                        <Left>
                            <Button transparent>
                            <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                        <Right />
                    </Header>
        */
        /*return (
            <View style={[style.header, styleHeader]}>
                {
                    left &&
                    // <View style={style.left}>
                        <TouchableOpacity onPress={() => left.action()} style={style.left} >
                            <Icon name={left.icon} style={[style.leftIcon]} type={"FontAwesome5"} />
                            {/* <SvgUri width={24} height={24} svgXmlData={left.icon} />  }
                        </TouchableOpacity>
                    // </View>
                }
                {
                    title &&
                    <View style={style.body}>
                        <TBSTitle 
                            value={title} />
                    </View>
                }
                {
                    right &&
                    <View style={style.right}>
                        <TouchableOpacity onPress={() => right.action()}>
                            {/* <SvgUri width={24} height={24} svgXmlData={right.icon}/> }
                            {/* <Icon name={right.icon} style={[style.leftIcon]} /> }
                            <Thumbnail source={right.icon} style={[{width:40, height:40}, right.style]} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );*/
    }


}

