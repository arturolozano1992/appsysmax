// Seccion de Imports
import React from 'react';
import { Text } from 'react-native'
import PropTypes from 'prop-types';
import TBSBase from '../TBSBase'
import {style} from './style'

export default class TBSText extends TBSBase {

    constructor (props) {
        super(props);
    }
    
    render () {
        const { value, styleText, onPress } = this.props;
        return (
            <Text style={[style.text, styleText]}
                onPress={onPress}>
                {value}
            </Text>
        );
    }


}

// Seccion de Props
TBSText.propTypes = TBSText.propTypes || {
    //value: PropTypes.string.isRequired,
    styleText: PropTypes.any
}
