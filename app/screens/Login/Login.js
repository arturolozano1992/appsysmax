import React, { Fragment } from "react";
import {
    View,
    Image,
    KeyboardAvoidingView,
    Platform,
    BackHandler,
    ImageBackground,
    StatusBar
} from "react-native";
import TBSBase from "../../components/TBSBase";
import TBSScreen from "../../components/TBSScreen";
import TBSTitle from "../../components/TBSTitle";
import TBSInput from "../../components/TBSInput";
import { style, } from "./style";
import { images } from "../../config/images";
import { getText, validateForms, } from "../../libs/TBSUtil";

export default class Login extends TBSBase {
    constructor(props) {
        super(props);
        this.state = {
            correo: "",
            clave: "",
            setPassword: "0",
        };
    }
    render() {
        return(
            <Fragment>
            <TBSScreen
                    statusBarColor={"transparent"}
                    styleContainer={style.container}
                    barStyle={"light-content"}
                    styleContent={{marginBottom: 0}}
                    normalBackground
                    login
                > 
                    <View style={style.wrapperLogo}>
                        <Image source={images.logo01} style={style.logo}></Image>
                    </View>
                    <View style={style.wrapperForm}>
                        <TBSTitle value="Iniciar sesión" styleTitle={{alignSelf:"center"}}/>   

                        <TBSInput
                            ref={(ref) => this.setRef("correo", ref)}
                            placeholder={getText("lblEmail")}
                            isRequired={true}
                            message={`${getText("msgCampoRequerido")} ${getText("lblEmail")}`}
                            onChangeText={this.onChangeText}
                            state={"correo"}
                            stackedLabel={false}
                        />

                    </View>
                 
                 </TBSScreen>
               
            </Fragment>
        )
    }
}