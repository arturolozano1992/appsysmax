/* eslint-disable */

import { StyleSheet, Platform } from 'react-native'
import { styleBase } from '../../config/theme';

export const style = StyleSheet.create({
    container: {
        backgroundColor: styleBase.colors.primaryBackgroundColor,
    },
    body: {
        //backgroundColor: "transparent",
        // paddingLeft: styleBase.paddingLeft,
        // paddingRight: styleBase.paddingRight,
        //paddingTop: 100,
        // height: "100%", //styleBase.deviceHeight
        //justifyContent: "space-between",
        flexDirection: "column",
        flex: 0
    },
    notch: {
        backgroundColor: styleBase.colors.primaryColor
    },
    wrapperLogo: {
        alignItems: "center",
        height: styleBase.deviceHeight * 0.50,
        padding: 40,
        flexDirection: "column",
        justifyContent: "center"
    },
    logo: {
        width: styleBase.deviceWidth - 180,
        height: styleBase.deviceWidth - 180,
        resizeMode: "contain"
    },
    wrapperForm: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,
        //backgroundColor: styleBase.colors.primaryBackgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //height: styleBase.deviceHeight * 0.45
    },
    inputContainer: {
        //marginTop: 20,
        borderBottomWidth: 0.66,
        borderBottomColor: styleBase.colors.quaternaryTextColor
    },
    styleInput: {
        color: styleBase.colors.quaternaryTextColor,
        paddingLeft: 0
    },
    wrapperButton: {
        marginTop: Platform.OS == "android" ? 15 : 20,
        //backgroundColor: styleBase.colors.primaryBackgroundColor
        shadowColor: styleBase.colors.primaryColor,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.47,
        shadowRadius: 12,
        elevation: 18,
    },
    styleButtomText: {
        color: styleBase.colors.quinaryTextColor, //quaternaryTextColor,
        fontWeight: "300",
        fontSize: styleBase.fontSize.h7
    },
    styleButton: {
        backgroundColor: styleBase.colors.primaryBackgroundColor
    },
    olvidarPassword: {
        marginTop: Platform.OS == "android" ? 15 : 30,
        fontSize: styleBase.fontSize.caption,
        alignSelf: "center",
        color: styleBase.colors.quaternaryTextColor,
        fontWeight: "300",
        fontSize: styleBase.fontSize.body2,
        //position: "absolute",
        //bottom: 0
    }
})