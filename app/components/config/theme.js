/* eslint-disable */
import { Dimensions, Platform, StatusBar } from "react-native";

export const theme = {
    headerHeight: Platform.OS === "ios" ? 56 : 56,
    deviceHeight: Dimensions.get("window").height,
    deviceWidth: Dimensions.get("window").width,
    fontFamily: "Roboto",
    fontSize: {
        h1: 96,
        h2: 60,
        h3: 48,
        h4: 34,
        h5: 24,
        h6: 20,
        h7: 18,
        subtitle1: 16,
        subtitle2: 14,
        body1: 16,
        body2: 14,
        button: 14,
        caption: 12,
        overline: 10,
    },
    colors: {
        //primaryColor: '#f0f3f9',
        // primaryColor: '#5C6DF9',
        // primaryLightColor: '#8C8CAB',
        // primaryDarkColor: '#24255D',
        // primaryBackgroundColor: "#ffffff",
        // primaryTextColor: '#8C8CAB',
        // primaryPlaceholder: '#F7F7F7',

        // secondaryColor: '#FFBC6C',
        // secondaryLightColor: '#000000',
        // secondaryDarkColor: '#000000',
        // secondaryBackgroundColor: "#F7F7F7",
        // secondaryTextColor: '#24255D',

        // tertiaryTextColor: '#24255D',
        // quaternaryTextColor: '#ffffff',
        // quinaryTextColor: "#3CBBFF",

        // tertiaryColor: '#77C3D0',

        primaryColor: '#388e3c', //Verde
        primaryLightColor: '#8C8CAB',
        primaryDarkColor: '#2E7D32',
        primaryBackgroundColor: "white", //Gris
        primaryTextColor: 'white',
        primaryPlaceholder: '#F7F7F7',

        secondaryColor: '#bdbdbd', //Gris
        secondaryLightColor: '#000000',
        secondaryDarkColor: '#000000',
        secondaryBackgroundColor: "#388e3c",
        secondaryTextColor: '#bdbdbd', //color para cajas de texto gris

        tertiaryTextColor: '#E93D04',
        quaternaryTextColor: '#ffffff',
        quinaryTextColor: "#3CBBFF",

        tertiaryColor: '#77C3D0',

        error: '#EB4A8F',
        calendarIcon:"#61577D",
        gdColorInfo1: "#B077FE",
        gdColorInfo2: "#8EB7FB",
        gdColorSuccess1: "#5FC663",
        gdColorSuccess2: "#70D29C",
        gdColorError1: "#C34BAA",
        gdColorError2: "#F75252",
        gdColorRosado1: "#EB77FE",
        gdColorRosado2: "#FB928F",
        gdColorCeleste1: "#77BDFE",
        gdColorCeleste2: "#8EE4FB",
        dayMark:"#C8C8C8",
        reporFinalizados:"#5AD981",
        reportesSinFinalizar:"#EA6887",
        reportRegistrado:"#EA6887",
        reportRevisado:"#EA9B68",
        reportCierre:"#EAD168",
        reportVerificado:"#5AD981"
    }
}

// if (Platform.OS === 'android') {
//     StatusBar.setBackgroundColor(theme.colors.primaryBackgroundColor, true)
//     StatusBar.setTranslucent(false)
// }
// else {
//     StatusBar.setBarStyle('dark-content', true);
// }