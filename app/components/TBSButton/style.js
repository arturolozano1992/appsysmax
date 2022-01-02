import { theme } from '../config/theme'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    styleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primaryColor,
        
        height: 50,
        marginTop: 18
    },
    styleButton2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
        height: 40,
        width: 40
    },
    large: {
        //width: theme.deviceWidth
    },
    medium: {
        width: theme.deviceWidth * 0.40
    },
    small: {
        width: theme.deviceWidth * 0.20
    },
    rounded: {
        borderRadius: 25,
    },
    textButton: {
        backgroundColor: 'transparent',
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 0.66,
        borderColor: theme.colors.primaryColor
    },
    styleText: {
        padding: 8,
        fontSize: theme.fontSize.body1,
        color: theme.colors.quaternaryTextColor
    },
    textButtonText: {
        color: theme.colors.primaryColor
    },
    textOutlineButton: {
        color: theme.colors.primaryColor
    },
    icon: {
        
    }
})