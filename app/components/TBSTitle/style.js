import { theme } from '../config/theme'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    title: {
        fontSize: theme.fontSize.h6,
        //fontWeight: "300",
        color: theme.colors.primaryTextColor
    }
})