/* eslint-disable */

import { StyleSheet, Platform } from 'react-native'
import { theme } from '../../components/config/theme';
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
        //paddingBottom: 40,
        //flex: 0
    },
    title:{
        alignSelf:"flex-start", 
        fontSize:styleBase.fontSize.h7, 
        color:styleBase.colors.primaryColor,
        marginTop:-5
    },
    text:{
        color:styleBase.colors.secondaryTextColor
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
        width: styleBase.deviceWidth - 50,
        height: styleBase.deviceWidth - 150,
        resizeMode: "contain"
    },
    wrapperForm: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,
        //backgroundColor: "white",
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
        color:styleBase.colors.secondaryTextColor,

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
        borderColor:styleBase.colors.secondaryColor,
        borderWidth:2,
        
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
    },
    botones:{alignItems:"center", marginTop:"10%"},
    combo:{width:theme.deviceWidth/2.5, padding:5}
})