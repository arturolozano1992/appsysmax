import React from 'react';
import { View, TextInput, Animated, Easing, KeyboardAvoidingView } from 'react-native';
import { Item, Label, Input, Textarea, Icon } from "native-base";
import PropTypes from 'prop-types';
import { style } from './style'
import TBSBase from '../TBSBase';
import { theme } from '../config/theme';

export default class TBSInput extends TBSBase {

    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this)

        this.state = {
            inputPaddingTop: style.styleInput.paddingTop,
            inputPaddingBottom: style.styleInput.paddingBottom,
            value: this.props.value
        }
        this.styleInputLabel = {}

        //if (!this.props.value)
        this.onFocus = false
        //else
        //    this.onFocus = true
        this.setAnimated()

    }

    setAnimated() {
        this.animatedTextSize = new Animated.Value(0)
        this.animatedTextPosition = new Animated.Value(0)
        this.animatedTextColor = new Animated.Value(0)
        this.animatedBorderColor = new Animated.Value(0)
    }

    setAnimations() {
        let duration = 100;
        Animated.parallel([
            Animated.timing(
                this.animatedTextSize,
                {
                    toValue: 1,
                    duration: duration,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.animatedTextPosition,
                {
                    toValue: 1,
                    duration: duration,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.animatedTextColor,
                {
                    toValue: 1,
                    duration: duration,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.animatedBorderColor,
                {
                    toValue: 1,
                    duration: duration,
                    easing: Easing.linear
                }
            )
        ]).start()
    }

    animation01() {
        this.onFocus = false
        console.log("animation01")
        console.log(this.state.value)
        // if (this.state.value == "")
        //     return
        // if (this.state.value)
        //     return
        console.log("animation01 HACER")
        this.setState({
            inputPaddingTop: style.styleInputPaddingTop,
            inputPaddingBottom: style.styleInputPaddingBottom
        })

        this.setAnimated()
        this.setAnimations()

    }

    animation02() {
        this.onFocus = true
        console.log("animation02")
        console.log(this.state.value)
        if (this.state.value == "")
            return
        // if (this.state.value)
        //     return
        console.log("animation02 HACER")
        this.setState({
            inputPaddingTop: style.styleInput.paddingTop,
            inputPaddingBottom: style.styleInput.paddingBottom
        })

        this.setAnimated()
        this.setAnimations()
    }

    setValue(value) {

        this.setState({
            value: value
        })
        // setTimeout(() => {
        //     console.log("valor " + this.state.value)
        //     if (this.state.value == "")
        //         this.animation02()
        //     else
        //         this.animation01()     
        // }, 1);

    }

    onChangeText(value, state, onChangeText) {
        this.setState({ value });

        //setTimeout(() => {
        // if (value == "")
        //     this.animation02()
        // else
        //     this.animation01()    
        //}, 1);

        if (onChangeText)
            onChangeText(state, value);
    }

    onPress = () => {
        this.setState({
          focusText: true
        })
      }

    render() {
        const { styleContainer, value, label, placeholder, styleLabel, styleInput, onChangeText, password, state, placeholderTextColor, onBlur, disabled, area, rowSpan, maxLength, rounded, icon, onPressIcon, stackedLabel, area2,autoFocus } = this.props;
        // if (!this.state.value)
        //     this.state.value = value;
        // if (!this.state.value)
        //     this.onFocus = false;
        // else
        //     this.onFocus = true;

        // if (!this.onFocus) {
        //     this.textSize = this.animatedTextSize.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [theme.fontSize.subtitle2, theme.fontSize.caption]
        //     })
        //     this.textPosition = this.animatedTextPosition.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [16, 4]
        //     })
        //     this.textColor = this.animatedTextColor.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [style.styleLabelPlaceholder.color, style.styleLabelPlaceholder2.color]
        //     })
        //     this.borderColor = this.animatedBorderColor.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [style.styleContainer.borderBottomColor, style.styleContainer2.borderBottomColor]
        //     })
        // }
        // else {
        //     this.textSize = this.animatedTextSize.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [theme.fontSize.caption, theme.fontSize.subtitle2]
        //     })
        //     this.textPosition = this.animatedTextPosition.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [4, 16]
        //     })
        //     this.textColor = this.animatedTextColor.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [style.styleLabelPlaceholder2.color, style.styleLabelPlaceholder.color]
        //     })
        //     this.borderColor = this.animatedBorderColor.interpolate({
        //         inputRange: [0, 1],
        //         outputRange: [style.styleContainer2.borderBottomColor, style.styleContainer.borderBottomColor]
        //     })
        // }

        if (area) {
            return (
                <Item
                    style={[
                        style.styleContainer,
                        styleContainer,
                        //{borderBottomColor: this.borderColor}
                    ]}
                    stackedLabel={stackedLabel == false ? false : true}>
                    {
                        label &&
                        <Label
                            style={[
                                style.styleLabel,
                                styleLabel,
                                //{fontSize: this.textSize, top: this.textPosition, color: this.textColor}
                            ]}>
                            {label}
                        </Label>
                    }

                    {

                        area2 ?
                            <TextInput
                                
                                 multiline={true}
                                 numberOfLines={rowSpan || 7}
                                // placeholderTextColor={placeholderTextColor || style.styleInputPlaceholder.color}
                                placeholder={placeholder}
                                onChangeText={(value) => this.onChangeText(value, state, onChangeText)}
                                value={value || this.state.value}
                                style={[
                                    style.styleInput,
                                    style.styleInput2,
                                    styleInput,
                                ]}
                                // onBlur={onBlur}
                                 editable={!disabled}
                                 maxLength={maxLength || 500}
                                 maxHeight={300}
                            /> :

                            <Textarea
                                bordered
                                rowSpan={rowSpan || 7}
                                placeholderTextColor={placeholderTextColor || style.styleInputPlaceholder.color}
                                placeholder={placeholder}
                                value={value || this.state.value}
                                onChangeText={(value) => this.onChangeText(value, state, onChangeText)}
                                style={[
                                    style.styleInput,
                                    styleInput,
                                ]}
                                onBlur={onBlur}
                                disabled={disabled}
                                maxLength={maxLength || 500}
                            />}



                </Item>
            );
        }
        else {
            return (
                <Item
                    style={[
                        style.styleContainer,
                        styleContainer,
                        //{borderBottomColor: this.borderColor}
                    ]}
                    //stackedLabel={!icon && true}
                    stackedLabel={stackedLabel == false ? false : true}
                    rounded={rounded}>
                    {
                        label &&
                        <Label
                            style={[
                                style.styleLabel,
                                styleLabel,
                                //{fontSize: this.textSize, top: this.textPosition, color: this.textColor}
                            ]}>
                            {label}
                        </Label>
                    }
                    <Input
                        placeholderTextColor={placeholderTextColor || style.styleInputPlaceholder.color}
                        placeholder={placeholder}
                        value={value || this.state.value}
                        onChangeText={(value) => this.onChangeText(value, state, onChangeText)}
                        style={[
                            style.styleInput,
                            styleInput,

                        ]}
                        secureTextEntry={password}
                        onBlur={onBlur}
                        disabled={disabled}
                    />
                    {
                        icon &&
                        <Icon
                            type="FontAwesome5"
                            name={icon}
                            onPress={onPressIcon}
                            active
                            style={style.icon}
                        />
                    }
                </Item>
            );
        }
        // return (

        //         <Animated.View style={[
        //                 style.styleContainer, 
        //                 styleContainer,
        //                 {borderBottomColor: this.borderColor}
        //             ]}>
        //             {
        //                 label ? 
        //                 <View>
        //                     <Animated.Text 
        //                         style={[
        //                             style.styleLabelPlaceholder, 
        //                             styleLabel, 
        //                             {fontSize: this.textSize, top: this.textPosition, color: this.textColor}
        //                         ]} 
        //                     >
        //                         {label}
        //                     </Animated.Text>
        //                     <TextInput
        //                         value={value || this.state.value}
        //                         onChangeText={(value) => this.onChangeText(value, state, onChangeText)}
        //                         onFocus={()=>this.animation01()}
        //                         onBlur={()=>this.animation02()}
        //                         style={[
        //                             style.styleInput, 
        //                             styleInput, 
        //                             {
        //                                 paddingTop: this.state.inputPaddingTop, 
        //                                 paddingBottom: this.state.inputPaddingBottom
        //                             }
        //                         ]}
        //                         secureTextEntry={password}
        //                     />
        //                 </View>
        //                 :
        //                 <TextInput
        //                     placeholder={placeholder}
        //                     placeholderTextColor={this.theme.colors.secondaryLightColor}
        //                     onChangeText={(value) => this.setState({value})}
        //                     style={[style.styleInput, styleInput]}
        //                 />
        //             }

        //         </Animated.View>

        // )
    }


}

// Seccion de Props
TBSInput.propTypes = TBSInput.propTypes || {
    type: PropTypes.number,
    styleContainer: PropTypes.object,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    styleLabel: PropTypes.object,
    styleInput: PropTypes.object
}

TBSInput.defaultProps = {

}