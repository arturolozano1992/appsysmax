import React from "react";
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems } from "react-navigation";
import { zoomIn, fromLeft, fromRight } from 'react-navigation-transitions';
import { TouchableOpacity, Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { init, getConfig } from "./config/settings";
import { Root, Icon } from "native-base";
import Login from "../app/screens/Login";
import CrearCuenta from "../app/screens/CrearCuenta";
import TBSBase from "./components/TBSBase";
import { styleBase } from "./config/theme";
import TBSAlert from "./components/TBSAlert";

const RootStack = createStackNavigator({
    
    Login: { screen: Login },
    CrearCuenta: { screen: CrearCuenta },
},
{
    headerMode: 'none',
    transitionConfig: () => fromLeft(),
    navigationOptions: {
        gesturesEnabled: false
    }
},
);
export const AppNavigator = createStackNavigator({
    /* Splash: {
        screen: Splash
    }, */
    Login: {
        screen: Login
    },
    Home: {
        screen: RootStack
    },
}, {
    headerMode: 'none',
    transitionConfig: () => fromLeft(),
    navigationOptions: {
        gesturesEnabled: false
    }
})

export default class App extends TBSBase {
    constructor(props) {
        super(props);
        init()
    }
    componentDidMount() {
        init();

    }

    componentWillUnmount() {
        
    }

    render() {
        // getConfig("logged").then((logged) => {
        //     if (logged === "true") {}
        // })
        return ( <Root>
            <AppNavigator />
           {/*  <TBSAlert ref = {
                (ref) => alertApp = ref
            }
            />  */}
            </Root >
        )
    }

}

const styles = StyleSheet.create({
    icons: {
        fontSize: styleBase.fontSize.h6,
        color: styleBase.colors.quaternaryTextColor,
        fontWeight: 'normal'
    }
});