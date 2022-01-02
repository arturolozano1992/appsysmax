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
import TBSButton from "../../components/TBSButton";
import TBSTitle from "../../components/TBSTitle";
import TBSInput from "../../components/TBSInput";
import { loadSettings, getConfig, setConfig } from "../../config/settings";
import { style, } from "./style";
import { images } from "../../config/images";
import { getText, validateForms, } from "../../libs/TBSUtil";
const config = null;

export default class Login extends TBSBase {
    constructor(props) {
        super(props);
        this.state = {
            correo: "",
            clave: "",
            setPassword: "0",
        };
        //this.init()
    }

    componentDidMount(){
        //this.init();
    }
    componentDidUpdate() {
        /* //log("SPLASH componentDidUpdate")
        try {
            if (this.props.navigation.state.params.logged)
                this.init()
        } catch (error) {
            //log(error, 2)
            this.init()
        } */
    }

    init() {
        //log("SPLASH INIT")
        try {
           
            
        } catch (error) {
            //log(error, 2)
        }
    }
    render() {
        return(
            <Fragment >
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
                        <TBSTitle value="Iniciar sesión" styleTitle={style.title}/>  
                        
                        {/* <View style={{flexDirection:"row", marginTop:"10%"}}> */}

                        {/* <TBSTitle value ="Identificación:" styleTitle={{color:"red", }}/> */}
                        <View style={{marginTop:20}}>
                        <TBSInput
                            ref={(ref) => this.setRef("lblIdentificacion", ref)}
                            placeholder={""}
                            label={"Identificación:"}
                            isRequired={true}
                            message={`${getText("msgCampoRequerido")} ${getText("lblIdentificacion")}`}
                            onChangeText={this.onChangeText}
                            state={"identificacion"}
                            stackedLabel={false}
                        />

                        <TBSInput
                            ref={(ref) => this.setRef("lblClave", ref)}
                            placeholder={""}
                            label={"Contraseña:    "}
                            isRequired={true}
                            password
                            message={`${getText("msgCampoRequerido")} ${getText("lblClave")}`}
                            onChangeText={this.onChangeText}
                            state={"clave"}
                            stackedLabel={false}
                        />
                        </View>
                        

                <View style={style.botones}>
                    <TBSButton 
                            medium
                            rounded
                            value={ "Iniciar sesión"}
                            styleButton={style.styleButton}
                            onPress={this.state.setPassword === "0" ? this.validate : this.login}
                        />

                        <TBSButton 
                            value={"Registrarse"}
                            styleText={{color: this.theme.colors.primaryColor,  fontWeight: 'bold', textDecorationLine: 'underline'}}
                            styleContainer={{alignSelf: "center", marginTop: 20}}
                            styleButton={{backgroundColor: "transparent"}}
                            onPress={()=> this.navigate("CrearCuenta")}
                        />
                </View>

                        

                        {/* </View>  */}
                        
                    </View>
                 
                 </TBSScreen>
               
            </Fragment>
        )
    }
}