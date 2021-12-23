import { StyleSheet } from "react-native";
import { theme } from "../config/theme";

export const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    innerContainer: {
        alignItems: "center",
        position: "absolute"
    },
    card: {
        width: theme.deviceWidth - 40,
        backgroundColor: theme.colors.primaryBackgroundColor,
        borderRadius: 20,
    },
    headerCard: {
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 0,
        backgroundColor: "transparent",
        borderRadius: 20,
    },
    titleText: {
        //fontWeight: "bold",
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize.h7,
        color: theme.colors.primaryColor
    },
    bodyCard: {
        backgroundColor: "transparent",
    },
    bodyCardText: {
        fontFamily: theme.fontFamily,
        color: theme.colors.primaryTextColor,
        fontSize: theme.fontSize.body2,
    },
    footerCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        borderRadius: 20,
        paddingBottom: 25
    },
    button1:{
        width: (theme.deviceWidth - 80) / 2
    },
    button2:{
        //backgroundColor: "rgba(1,1,1,0.7)"//this.getColor().text_04,
        //backgroundColor: "#000000"
    },
    button3:{
        fontSize: theme.fontSize.body2
    },
    iconClose: {
        //color: theme.colors.secondaryTextColor,
        color: theme.colors.secondaryTextColor,
        fontSize: theme.fontSize.body1
    }
});