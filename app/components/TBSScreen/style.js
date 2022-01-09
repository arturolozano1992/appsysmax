import { theme } from '../config/theme'
import { StyleSheet } from 'react-native'
import { styleBase } from '../../config/theme';

export const style = StyleSheet.create({
    container: {
        backgroundColor: styleBase.colors.primaryBackgroundColor,
        //flex: 1,
        //justifyContent: 'space-between',
    },
    content: {
        backgroundColor: styleBase.colors.primaryBackgroundColor,
        //marginBottom: 20,
        marginTop: 30
    },
    container2: {
        backgroundColor: styleBase.colors.primaryBackgroundColor,
        flex: 1,
        //justifyContent: 'space-between',
    },
    header: {
        backgroundColor: theme.colors.primaryColor
        // height: theme.headerHeight,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // elevation: 5,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.2,
    },
    notch: {
        //backgroundColor: theme.colors.primaryDarkColor
    }
})