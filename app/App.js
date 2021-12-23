import React from "react";
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems } from "react-navigation";
import { zoomIn, fromLeft, fromRight } from 'react-navigation-transitions';
import { TouchableOpacity, Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { Root, Icon } from "native-base";
import Login from "../app/screens/Login"
import TBSBase from "./components/TBSBase";
import { styleBase } from "./config/theme";
import TBSAlert from "./components/TBSAlert";


export const AppNavigator = createStackNavigator({
    /* Splash: {
        screen: Splash
    }, */
    Login: {
        screen: Login
    },
    /* Home: {
        screen: RootStack
    }, */
}, {
    headerMode: 'none',
    transitionConfig: () => fromLeft(),
    navigationOptions: {
        gesturesEnabled: false
    }
})

export default class App extends TBSBase {
    componentDidMount() {
       /*  SplashScreen.hide();

      
        let notifications = new Notifications();

        notifications.channels();
       
        this.onTokenRefreshListener = notifications.onTokenRefresh();
        
        this.onNotification = notifications.onNotification();
        this.onNotificationDisplayed = notifications.onNotificationDisplayed();
        this.onNotificationOpened = notifications.onNotificationOpened();
        this.getInitialNotification = notifications.getInitialNotification(); */

    }

    componentWillUnmount() {
        /* this.onTokenRefreshListener();
        
        this.onNotification();
        this.onNotificationDisplayed();
        this.onNotificationOpened();
        this.getInitialNotification(); */
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