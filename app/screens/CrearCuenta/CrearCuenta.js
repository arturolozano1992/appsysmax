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
import TBSBody from "../../components/TBSBody";
import TBSTitle from "../../components/TBSTitle";
import TBSInput from "../../components/TBSInput";
import TBSDropDown from "../../components/TBSDropDown";
import { style, } from "./style";
import TBSHeader from "../../components/TBSHeader/TBSHeader";

export default class CrearCuenta extends TBSBase {
    constructor(props){
        super(props);
        this.state={
            tipoGanado:[{key:0,value:"Seleccione tipo de ganado."}],
            tipoDocumento:[{key:0,value:"Seleccione tipo de documento."}]
        }
    }

    render(){
        return(
            <Fragment>
            <TBSScreen
                    header={true}
                    headerTitle={"SysMax"} 
                    left={{action: ()=> this.navigate("Login"), icon:"chevron-left"}}
                    styleContent={{marginBottom:0}}
                > 
                
                <TBSBody bodyStyle={style.body}>
                    <TBSTitle value="Resgistro de comerciante" styleTitle={style.title}/> 

                    <TBSDropDown ref={(ref)=> this.setRef("tipoDocumento", ref)}
                        placeholderStyle={style.text}
                        iosHeader={"Tipo Documento"}
                        placeholder={"Seleccionar Tipo de documento..."}
                        label={"Tipo Documento"}
                        items={this.state.tipoDocumento}
                        //wrapper={style.cboContainer}
                        isRequired={true}
                        message={`${"Campo Requerido"} Tipo de Documento`}
                        state={"tipoDocumento"}
                       /*  onValueChange={this.empresaChange} */
                        >

                        </TBSDropDown>

                    <TBSInput
                            ref={(ref) => this.setRef("lblIdentificacion", ref)}
                            placeholder={"Identificación"}
                            /* label={"Identificación:"} */
                            isRequired={true}
                            styleInput={style.text}
                            placeholderTextColor={style.text}
                            message={`${"Campo requerido:"} ${"Identificación"}`}
                            onChangeText={this.onChangeText}
                            state={"identificacion"}
                            stackedLabel={false}
                        />

                        <TBSInput
                            ref={(ref) => this.setRef("lblNombres", ref)}
                            placeholder={"Nombres"}
                            /* label={"Nombres:    "} */
                            placeholderTextColor={style.text}
                            styleInput={style.text}
                            isRequired={true}
                            message={`${"Campo requerido:"} ${"Nombres"}`}
                            onChangeText={this.onChangeText}
                            state={"nombres"}
                            stackedLabel={false}
                        />

                        <TBSInput
                            ref={(ref) => this.setRef("apellidos", ref)}
                            placeholder={"Apellidos"}
                            /* label={"Nombres:    "} */
                            styleInput={style.text}
                            placeholderTextColor={style.text}
                            isRequired={true}
                            message={`${"Campo requerido:"} ${"Apellidos"}`}
                            onChangeText={this.onChangeText}
                            state={"apellidos"}
                            stackedLabel={false}
                        />
                        {/* tipo ganado combo */}
                        <TBSDropDown ref={(ref)=> this.setRef("idTipoGanado", ref)}
                        placeholderStyle={style.text}
                        iosHeader={"Tipo Ganado"}
                        placeholder={"Seleccionar Tipo de ganado..."}
                        label={"Tipo Ganado"}
                        items={this.state.tipoGanado}
                        //wrapper={style.cboContainer}
                        isRequired={true}
                        message={`${"Campo Requerido"} Tipo Ganado`}
                        state={"idTipoGanado"}
                       /*  onValueChange={this.empresaChange} */
                        >

                        </TBSDropDown>
                        <TBSInput
                            ref={(ref) => this.setRef("lblCelular", ref)}
                            placeholder={"Celular"}
                            
                            /* label={"Nombres:    "} */
                            styleInput={style.text}
                            placeholderTextColor={style.text}
                            isRequired={true}
                            message={`${"Campo requerido:"} ${"celular"}`}
                            onChangeText={this.onChangeText}
                            state={"telefono"}
                            stackedLabel={false}
                        />

                </TBSBody>
            </TBSScreen>
            </Fragment>
        )
    }

}