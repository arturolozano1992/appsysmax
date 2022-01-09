// Seccion de Imports
import React from "react";
import PropTypes from "prop-types";
import { View, Platform } from "react-native";
import { Icon, Picker, Item, Label} from "native-base";
//import Icon from "react-native-vector-icons/Feather";
import TBSBase from "../TBSBase";
import {style} from "./style";
import TBSText from "../TBSText";
import { theme } from "../config/theme";

export default class TBSDropDown extends TBSBase {

    constructor (props) {
        super(props);
        this.state = {
            value: this.props.value,
            label: this.props.label
        };

        this.setItems = this.setItems.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    setItems(items) {
        try {
            if (items.length > 0) {
                var _items = [];
                items.map((i) => {
                    _items.push(<Picker.Item key={i.key} label={i.value} value={i.key} />);
                });
                return(
                    _items
                );
            }
        } catch (error) {
            return null;
        }
    }

    onValueChange(value) {
        if (value !== null && value !== undefined) {
            this.setValue(value);
            try {
                if (this.props.onValueChange)
                    this.props.onValueChange(value);
            } catch (error) {
                // eslint-disable-next-line no-undef
                console.log(error);
            }
        }
    }
    

    componentDidUpdate(){
        if(this.props.function != undefined){
            this.props.function();
        }
    }
    
    render () {
        //SI SE APLICA UN FONDO AL PICKER, LA FLECHA DESAPARECE
        const { placeholder, onValueChange, items, iosHeader, wrapper, enabled, styleDropDown, iosIcon, styleIconIos, textStyle, placeholderStyle, label, styleLabel } = this.props;
        //let marginTop = !this.state.value ? wrapper.marginTop : 2;
        //let borderBottomColor = this.state.value ? theme.colors.primaryDarkColor : theme.colors.primaryTextColor;
        //let label = !this.state.value ? this.state.label :
        return (
            // <View style={[style.container,  wrapper,]}>
            <Item picker stackedLabel style={[style.container,  wrapper,]}>
                {
                    label !== "" && <Label
                                        style={[
                                            style.styleLabel,
                                            styleLabel,
                                            //{fontSize: this.textSize, top: this.textPosition, color: this.textColor}
                                        ]}>
                                        {label}
                                    </Label>
                }
                
                <Picker
                    enabled={enabled}
                    mode={"dropdown"}
                    iosHeader={iosHeader}
                    //iosIcon={iosIcon === 0 ? undefined : <Icon style={[style.icon, styleIconIos,]} type={"FontAwesome"} name="sort-down"  />}
                    //iosIcon={<Icon style={[style.icon, styleIconIos,]} type={"Feather"} name="chevron-down"  />}
                    headerBackButtonText={"Volver"}
                    placeholder={placeholder}
                    placeholderStyle={[style.placeholderStyle, placeholderStyle,]}
                    style={[style.dropdown, styleDropDown, Platform.OS === "android" ? style.colorAndroid : null]}
                    selectedValue={this.state.value}
                    onValueChange={(value) => this.onValueChange(value)}
                    itemTextStyle={style.itemTextStyle}  //SOLO iOS
                    itemStyle={style.itemTextStyle} //SOLO iOS
                    textStyle={[style.textStyle, textStyle]}  //SOLO iOS
                >
                    {this.setItems(items)}
                </Picker>
            </Item>
            // </View>
        );
    }


}

// Seccion de Props
TBSDropDown.propTypes = TBSDropDown.propTypes || {
    
};
