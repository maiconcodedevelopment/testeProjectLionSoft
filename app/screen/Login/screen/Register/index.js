import React from "react"

import { View , Text , TextComponent , TextInputComponent , ImageBackground , Alert , Keyboard , Platform , StyleSheet , NativeModules } from "react-native"
import DeviceInfo from "react-native-device-info";
import Icon from "react-native-vector-icons/dist/MaterialIcons"

import { width, height } from "../../../../style";
import FlatBall from "./components/flat/flatBall";
import InputTextRead from "../../../../components/input/inputTextRead";
import TutooButtonOrange from "../../../../components/button/TutooButtonOrange";
import { navigationLoginVerificationPhoneScreen } from "../../../../router/actions/User/Register";

import { requestValidationPhone } from "../../../../redux/actions/User/request"
import { verificationPhone } from "../../../../redux/actions/User/dispatch"


import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import TutooAlert from "../../../../components/alert/TutooAlert";
import { ScrollView } from "react-native-gesture-handler";


const getDeviceId = NativeModules.DeviceId
const deviceID = DeviceInfo.getUniqueID()

class LoginRegister extends React.Component{

    state = {
        name : "",
        email : "",
        phone : "",
        cpf : "",
        isActive : false
    }

    onActiveAlert = () =>{
       this.setState(state => {
           return {
               isActive : !state.isActive
           }
       }) 
    }

     loginVerification = () => {
        const { verificationPhone , navigation , dispatch } = this.props
        const { name , email , phone , cpf , isActive } = this.state

        console.log(this.state)

        if(name.length > 0 && email.length > 0 && phone.length > 0 && cpf.length > 0){
            
            requestValidationPhone({ name , email , phone , cpf , device_id : deviceID   },function(typeDispatch,data,response){
                console.log(response)
                dispatch(typeDispatch(data))
                navigation.dispatch(navigationLoginVerificationPhoneScreen)
            }).then(response => {
                console.log(response)
            }) .catch((error) => {
                this.onActiveAlert()
            })
            return
        }

        this.onActiveAlert()
        // requestValidationPhone({ phone , device_id : "MODEL3444" }).then((response)=>{
        //     if(response.ok){
        //         verificationPhone({ name , email , phone , cpf ,device_id : "MODEL3444" })
        //         return response
        //     }
        // }).then((response) => {
        //     navigation.dispatch(navigationLoginVerificationPhoneScreen)
        //     return response
        // }).catch((error) => {
            
        // })
        
    }

    sendPhone = () => {
        
    }

    render(){
        const { isActive } = this.state
        const { navigation } = this.props

        return(
            <View style={{ justifyContent : "center" , alignItems : "center"}} >
               <ScrollView contentContainerStyle={{flex : 1 , alignItems : "center" , justifyContent : "space-between"  }} horizontal={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >

               <TutooAlert icon={<Icon name='check' size={30} color="white" />} buttons={[{ title : "OK!" , onPress : () => this.onActiveAlert() }]} message={"Algo deu errado !! Solicita novamente os dados de Entrada."} isActive={isActive} />
               
               <ImageBackground source={require("../../../../res/images/png/bar_wallpaper.png")} style={{ width , height : height * 0.25 , alignItems : "center" , marginBottom : 40 , zIndex : 1 }} imageStyle={{ resizeMode : "stretch" }} >
                  <FlatBall image={require("../../../../res/images/png/logo_tutoo.png")} style={{ width : 100 , height : 100 }} imageStyle={{ resizeMode : "cover" }} />
               </ImageBackground>
               <View style={{}} >

               </View>
               <View >
                  <InputTextRead 
                       style={{ width : width * 0.85 , marginBottom : 15 }}
                       onChangeText={(value) => this.setState({name:value})} 
                       placeholder="Nome" 
                       icon={require("../../../../res/icons/png/user.png")} 
                       validation={true} />
                  <InputTextRead 
                       style={{ width : width * 0.85 , marginBottom : 15 }}
                       onChangeText={(value) => {this.setState({ email : value }) } } 
                       placeholder="E-mail
                       " icon={require("../../../../res/icons/png/email.png")} 
                       validation={true} />
                  <InputTextRead 
                       style={{ width : width * 0.85 , marginBottom : 15 }}
                       onChangeText={(value) => {this.setState({ phone : value }) }}
                       placeholder="Celular" 
                       mask={"+55 ([00]) [00000]-[0000]"}
                       icon={require("../../../../res/icons/png/phone.png")} 
                       validation={true} />
                  <InputTextRead 
                       style={{ width : width * 0.85 , marginBottom : 15 }}
                       onChangeText={(value) => { this.setState({ cpf : value })} }
                       placeholder="CPF" 
                       mask={"[000].[000].[000]-[00]"}
                       icon={require("../../../../res/icons/png/data.png")} 
                       validation={true} />
               </View>

               <View style={{ marginBottom : 50 }} >
                   <TutooButtonOrange style={{width : width * 0.75 }} text="CADASTRAR" onPress={this.loginVerification} />
               </View>

               </ScrollView>

            </View>
        )
    }
}

let mapStateProps = (state) => ({
    user : state.user
})

let mapDispatchProps = (dispatch) => bindActionCreators({ verificationPhone },dispatch)

export default connect()(LoginRegister)