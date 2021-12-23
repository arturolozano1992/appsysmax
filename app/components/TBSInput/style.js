import { theme } from '../config/theme'
import { StyleSheet } from 'react-native'
import { styleBase } from '../../config/theme';

//export const style = StyleSheet.create({
export const style = {
    styleContainer: {
        //borderBottomWidth: 1,
        //borderBottomColor: theme.colors.primaryColor,//theme.colors.primaryTextColor,
        //height: 40,
        //minHeight: 40,
        //paddingBottom: 10, 
        marginTop: 18,
        backgroundColor: theme.colors.primaryBackgroundColor,
        borderRadius: 8,
        borderBottomWidth: 0,
        paddingLeft: 20,
        paddingRight: 20
    },
    styleContainer2: {
        borderBottomColor: theme.colors.primaryDarkColor
    },
    // styleLabel: {
    //     position: 'absolute', 
    //     fontSize: theme.fontSize.caption,
    //     paddingLeft: 12,
    //     //top: 4
    // },
    // styleLabelPlaceholder: {
    styleLabel: {
        //position: 'absolute', 
        fontSize: theme.fontSize.caption,
        color: theme.colors.primaryColor,
        //paddingLeft: 12,
        top: 5
    },
    styleLabelPlaceholder2: {
        color: theme.colors.primaryDarkColor,
    },
    styleInput: {
        //borderBottomWidth: 1,
        fontSize: theme.fontSize.body1,//.subtitle2, 
        //paddingTop: 16, 
        //paddingBottom: 10, 
        //marginBottom
        paddingLeft: 0, 
        paddingRight: 0,
        color: theme.colors.primaryTextColor,
        //height: 40,
        //top: 0//-10
    },
    styleInput2: {
        paddingTop: 16,
        paddingBottom: 16,
        width: styleBase.deviceWidth - 80
    },
    styleInputPaddingTop: 0,//22,
    styleInputPaddingBottom: 0,//10,
    styleInputPlaceholder: {
        color: theme.colors.primaryTextColor
    },
    icon: {
        color: theme.colors.primaryTextColor,
        fontSize: theme.fontSize.h6
    },
};