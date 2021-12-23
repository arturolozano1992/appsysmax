import { theme } from '../config/theme'
import { StyleSheet, Platform } from 'react-native'

export const style = StyleSheet.create({
    header: {
        backgroundColor: theme.colors.primaryDarkColor,
        height: theme.headerHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        elevation: 0,
        marginTop: Platform.OS === "ios" ? 0 : 24,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.2,
    },
    body: {
        flex: 1, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0
        //width: theme.deviceWidth * 0.60,
    },
    left: {
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        color: theme.colors.primaryTextColor
    },
    leftIcon: {
        color: theme.colors.primaryTextColor,
        fontSize: theme.fontSize.body1
    },
    right: {
        justifyContent: 'center',
        //marginRight: 16,
        paddingLeft: 20,
        paddingRight: 20,
    },
    rightIcon: {
        color: theme.colors.primaryTextColor,
        fontSize: theme.fontSize.body1
    },
    rightImage: {
        width: 25, 
        height: 25, 
        resizeMode: 'stretch'
    }
})