import { theme } from '../config/theme'
import { StyleSheet, Platform } from 'react-native'

export const style = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderColor: theme.colors.primaryColor,//this.getColor().green
        alignItems: "flex-start",
        backgroundColor: theme.colors.primaryBackgroundColor,
        borderRadius: 8,
        //height: 50,
        marginTop: 18,
        marginLeft: "6%",
        width:theme.deviceWidth - 80
    },
    dropdown: {
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: Platform.OS === "ios" ? 5 : 20,
        borderRadius: 0,
        height: 50,
        //fontSize: 10//theme.fontSize.subtitle2,
        backgroundColor: "transparent",
        width: "100%"
        
    },
    styleLabel: {
        fontSize: theme.fontSize.caption,
        color: theme.colors.primaryColor,
        top: 5,
        marginLeft: 20,
    },
    colorAndroid: {
        color: theme.colors.secondaryTextColor,
        fontSize: theme.fontSize.body1,
    },
    textStyle: { //TEXTO DEL CAMPO
        color: theme.colors.primaryTextColor,//primaryColor,// this.getColor().text_01,
        fontSize: theme.fontSize.body1,
        //paddingLeft: 20,
        fontFamily: theme.fontFamily,
        //width: theme.deviceWidth * 0.70
    },
    itemTextStyle: { //LISTA DE ITEMS EN IOS
        color: theme.colors.primaryTextColor,//primaryTextColor,//this.getColor().text_06,
        fontSize: theme.fontSize.subtitle2,
        fontFamily: theme.fontFamily
    },
    icon: {
        marginBottom: 10
    },
    placeholderStyle: {
        color: theme.colors.secondaryTextColor
    },
    label: {
        position: "absolute", 
        color: theme.colors.primaryDarkColor,
        fontSize: theme.fontSize.caption,
        marginLeft: 12,
        top: -8
    }
});