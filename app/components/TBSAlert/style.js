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
        backgroundColor: "transparent",
        borderRadius: 8,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderWidth: 0,
    },
    headerCard: {
        justifyContent: "center",
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 0,
        backgroundColor: "transparent",
        borderRadius: 20,
    },
    titleText: {
        //fontWeight: "bold",
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize.h7,
        color: theme.colors.primaryTextColor,
        fontWeight: "bold"
    },
    bodyCard: {
        backgroundColor: "transparent",
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    bodyCardText: {
        fontFamily: theme.fontFamily,
        color: theme.colors.primaryTextColor,
        fontSize: theme.fontSize.h6,
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