import { theme } from '../config/theme'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    text: {
        color: theme.colors.primaryTextColor,
        fontSize: theme.fontSize.body1,
        fontFamily: theme.fontFamily
    }
});