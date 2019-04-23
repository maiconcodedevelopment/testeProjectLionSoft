import React from "react"
import { View , Text , TextInput , TextComponent , ImageBackground } from "react-native"

import { AsyncStorage , ImageStore } from "react-native";

import Icon from "react-native-vector-icons/dist/MaterialIcons"

import FlatBall from "../../components/flat/flatBall";
import InputTextPassword from "../../../../../../components/input/inputTextPassword";
import { width, height } from "../../../../../../style";
import TutooButtonOrange from "../../../../../../components/button/TutooButtonOrange";
import { navigationLoginRegisterActiveScreen } from "../../../../../../router/actions/User/Register";
import { requestCreateUser } from "../../../../../../redux/actions/User/request";

import { connect } from "react-redux";
import TutooAlert from "../../../../../../components/alert/TutooAlert";

class LoginRegisterPassword extends React.Component{

    state = {
        password : "",
        isActiveError : false,
        isActive : false
    }

    onActiveAlertError = () =>{
        this.setState(state => {
            return {
                isActiveError : !state.isActiveError
            }
        }) 
     }

     onActiveAlert = () => {
        this.setState(state => {
            return {
                isActive : !state.isActive
            }
        })
     }


    onPassword = (value) => {
        this.setState(state => {
            return {
                password : value
            }
        })
    }

    loginRegister = async () => {
        const { user , navigation , dispatch } = this.props
        const { password } = this.state

        await requestCreateUser({ ...user , password },(typeDispatch,data,response) => {
            console.log("------")
            console.log(response)
            console.log("------")

            this.onActiveAlert()
        }).then(({ typeDispatch , data , response }) => {
             AsyncStorage.setItem("token",response.token).then(() => {
               dispatch(typeDispatch(response))
            })
        }) .catch((error) => {
            console.log(error)
            this.onActiveAlertError()
        })

    }

    onRegisterActiveLogin = () => {
        const { navigation } = this.props
        this.onActiveAlert()
        navigation.dispatch(navigationLoginRegisterActiveScreen)
    }
    

    render(){
        const { user } = this.props
        const { password , isActive , isActiveError } = this.state

        return(
            <View style={{flex : 1 , alignItems : "center" , justifyContent : "space-between" }} >

                <TutooAlert icon={<Icon name='close' size={30} color="white" />} iconColorBox="red" buttons={[{ title : "OK!" , onPress : () => this.onActiveAlertError() }]} message={"Algo deu errado !! Solicita novamente os dados de Entrada."} isActive={isActiveError} />
                <TutooAlert icon={<Icon name='check' size={30} color="white" />} iconColorBox="#14c400" buttons={[{ title : "OK!" , onPress : () =>  this.onRegisterActiveLogin() }]} message={"Senha cadastrada com sucesso."} isActive={isActive} />

                <ImageBackground source={require("../../../../../../res/images/png/bar_wallpaper.png")} style={{ width , height : height * 0.25 , alignItems : "center" , marginBottom : 40 , zIndex : 1 }} imageStyle={{ resizeMode : "stretch" }} >
                    <FlatBall image={require("../../../../../../res/images/png/lock_password.png")} style={{ width : 70 , height : 84 }} imageStyle={{ resizeMode : "cover" }} />
                </ImageBackground>

                <View>
                    <Text style={{ textAlign : "center" , color : "#6d6e71" , fontSize : 24 , fontWeight : "bold" , marginBottom : 5 }} >Olá {user.name}</Text>
                    <Text style={{ textAlign : "center" , color : "#6d6e71" , fontSize : 16  }} >{`Por gentileza cadastre abaixo sua senha de\nacesso para autorizar os pagamentos`}</Text>
                </View>
                <View style={{ marginVertical : 10}} >
                   <InputTextPassword style={{ width : width * 0.8 }} onChangeText={this.onPassword} value={password} />
                </View>
                <View style={{ marginBottom : 50 }} >
                    <TutooButtonOrange style={{width : width * 0.75 }} text="CADASTRAR" onPress={this.loginRegister}  />
                </View>

            </View>
        )
    }
}

let mapStateProps = (state) => {
    return {
        user : state.user.user
    }
}

export default connect(mapStateProps)(LoginRegisterPassword)