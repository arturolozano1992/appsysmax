// Seccion de Imports
import React from 'react';
import { View, ScrollView } from 'react-native'
import {style} from './style'
import TBSBase from '../TBSBase'

export default class TBSBody extends TBSBase {

    constructor (props) {
        super(props);
        
    }
    
    render () {
        const { scrollEnabled, bodyStyle, children } = this.props;
        
        return (
            //<View>

            <View scrollEnabled={scrollEnabled || false} style={[style.body, bodyStyle]}>

                {children}

            </View>
                
            //</View>
        );
    }


}

