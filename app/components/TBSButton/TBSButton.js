import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {style} from './style'
import TBSBase from '../TBSBase';
import TBSText from '../TBSText/TBSText';
//import SvgUri from 'react-native-svg-uri';
import { Icon } from 'native-base';

export default class TBSButton extends TBSBase {

    constructor (props) {
        super(props);
        this.setValue = this.setValue.bind(this)
    }

    setValue(value){
        this.setState({
            value:value
        })
    }

    render () {
        const { type, value, image, styleContainer, styleButton, styleText, styleImage, large, medium, small, rounded, textButton, outlineButton, onPress, icon } = this.props;
        
        return (
            <View style={[style.styleContainer, styleContainer]}>
            {
                type === 0 &&
                <TouchableOpacity
                    onPress={onPress}
                    style={[
                        style.styleButton, 
                        large && style.large, 
                        medium && style.medium, 
                        small && style.small,
                        rounded && style.rounded,
                        textButton && style.textButton, 
                        outlineButton && style.outlineButton,
                        styleButton]}>

                    <TBSText
                        styleText={[
                            style.styleText, 
                            textButton && style.textButtonText,
                            outlineButton && style.textOutlineButton,
                            styleText
                        ]}
                        value={value}
                        />

                </TouchableOpacity> 
            }
            {
                type === 1 &&
                <TouchableOpacity
                    onPress={onPress}
                    style={[style.styleButton2, styleButton]}
                >
                    <Icon name={icon.name} type={"FontAwesome5" || icon.type} style={[style.icon, icon.style]} />

                </TouchableOpacity>

            }
            {
                type === 2 &&
                <TouchableOpacity
                    onPress={onPress}
                    style={[
                        style.styleButton, 
                        large && style.large, 
                        medium && style.medium, 
                        small && style.small,
                        rounded && style.rounded,
                        textButton && style.textButton, 
                        outlineButton && style.outlineButton,
                        styleButton]}>
                    <Icon name={icon.name} type={"FontAwesome5" || icon.type} style={[style.icon, icon.style]} />
                    <TBSText
                        styleText={[
                            style.styleText, 
                            textButton && style.textButtonText,
                            outlineButton && style.textOutlineButton,
                            styleText
                        ]}
                        value={value}
                        />

                </TouchableOpacity> 
            }
            </View>
        )
    }


}

// Seccion de Props
TBSButton.propTypes = TBSButton.propTypes || {
    type: PropTypes.number, 
    value: PropTypes.string,
    image: PropTypes.object,
    styleContainer: PropTypes.object, 
    styleButton: PropTypes.object,
    styleText: PropTypes.object,
    styleImage: PropTypes.object,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    rounded: PropTypes.bool, 
    textButton: PropTypes.bool,
    outlineButton: PropTypes.bool,
    onPress: PropTypes.func
}

TBSButton.defaultProps = {
    type: 0
}