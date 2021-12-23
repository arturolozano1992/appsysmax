// Seccion de Imports
import React from 'react';
import TBSBase from '../TBSBase'
import {style} from './style'
import TBSText from '../TBSText/TBSText';

export default class TBSTitle extends TBSBase {

    constructor (props) {
        super(props);
        
    }
    
    render () {
        const { value, styleTitle } = this.props
        return (
            <TBSText 
                styleText={[style.title, styleTitle]} 
                value={value}
            />
                
        );
    }


}

