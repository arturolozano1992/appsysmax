import { theme } from '../config/theme'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    body: {
        backgroundColor: "transparent",
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        height: "100%"
        //height: theme.deviceHeight
        //backgroundColor: theme.colors.primaryColor,
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //height: 500,
        //width: 300
    }
})