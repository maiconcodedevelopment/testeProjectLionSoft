
import React from "react"

import { View , Text , TextComponent , TextInputComponent , ImageBackground , Alert , Keyboard , StyleSheet} from "react-native"

import Icon from "react-native-vector-icons/dist/MaterialIcons"

import { width, height } from "../../../../style";
import InputTextRead from "../../../../components/input/inputTextRead";
import TutooButtonOrange from "../../../../components/button/TutooButtonOrange";
import { navigationLoginVerificationPhoneScreen } from "../../../../router/actions/User/Register";

import { requestValidationPhone, requestSignIn } from "../../../../redux/actions/User/request"
import { verificationPhone } from "../../../../redux/actions/User/dispatch"


import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import TutooAlert from "../../../../components/alert/TutooAlert";
import { ScrollView } from "react-native-gesture-handler";
import FlatBall from "../Register/components/flat/flatBall";
import { navigationUserClientScrenn } from "../../../../router/actions/UserClient";
import DeviceInfo from "react-native-device-info"


let deviceID = DeviceInfo.getUniqueID()

class LoginSignIn extends React.Component{

    state = {
        email : "",
        password: "",
        isActive : false,
        isUser : false
    }

    onActiveAlert = () =>{
       this.setState(state => {
           return {
               isActive : !state.isActive
           }
       }) 
    }

    onUserAlert = () => {
        this.setState(state => {
            return {
                isUser : !state.isUser
            }
        }) 
    }

     loginVerification = () => {
        const { verificationPhone , navigation , dispatch } = this.props
        const { email , password , isActive } = this.state

        console.log(this.state)

        if(email.length > 0 && password.length > 0){

            requestSignIn({ email , password , device_id : deviceID }).then(({ typeDispatch , data , response , login }) => {
                console.log(response)
                console.log(data)
                console.log(typeDispatch)
                if(login){
                    AsyncStorage.setItem("token",response.token).then(() => {
                        dispatch(typeDispatch(response))
                        navigation.dispatch(navigationUserClientScrenn)
                     })
                }else{
                    navigation.dispatch(navigationLoginVerificationPhoneScreen)
                }
                dispatch(typeDispatch(response))
            }).catch(() => {
                this.onUserAlert()
            })

            return
        }

        this.onActiveAlert()
    }

    sendPhone = () => {
        
    }

    render(){
        const { isActive , isUser } = this.state
        const { navigation } = this.props

        return(
            <View style={{ justifyContent : "center" , alignItems : "center"}} >
               <ScrollView contentContainerStyle={{flex : 1 , alignItems : "center" , justifyContent : "space-between"  }} horizontal={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >

               <TutooAlert icon={<Icon name='check' size={30} color="white" />} buttons={[{ title : "OK!" , onPress : () => this.onUserAlert() }]} message={"Usuário Invalido !!"} isActive={isUser} />
               <TutooAlert icon={<Icon name='check' size={30} color="white" />} buttons={[{ title : "OK!" , onPress : () => this.onActiveAlert() }]} message={"Algo deu errado !! Solicita novamente os dados de Entrada."} isActive={isActive} />
               
               <ImageBackground source={require("../../../../res/images/png/bar_wallpaper.png")} style={{ width , height : height * 0.25 , alignItems : "center" , marginBottom : 40 , zIndex : 1 }} imageStyle={{ resizeMode : "stretch" }} >
                  <FlatBall image={require("../../../../res/images/png/logo_tutoo.png")} style={{ width : 100 , height : 100 }} imageStyle={{ resizeMode : "cover" }} />
               </ImageBackground>
               <View style={{}} >

               </View>
               <View >
                  <InputTextRead 
                       style={{ width : width * 0.85 , marginBottom : 15 }}
                       onChangeText={(value) => this.setState({email:value})} 
                       placeholder="E-mail" 
                       icon={require("../../../../res/icons/png/email.png")} 
                       validation={true} />
                  <InputTextRead 
                       style={{ width : width * 0.85 , marginBottom : 15 }}
                       onChangeText={(value) => {this.setState({ password : value }) } } 
                       placeholder="PIN de acesso"
                       secureTextEntry={true}
                       icon={require("../../../../res/icons/png/icon_password.png")} 
                       validation={true} />
               </View>

               <View style={{ marginBottom : 50 }} >
                   <TutooButtonOrange style={{width : width * 0.75 }} text="ENTRAR" onPress={this.loginVerification} />
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

export default connect()(LoginSignIn)