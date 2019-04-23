import React from "react"

import { View , Text , TextComponent , TextInputComponent , ImageBackground , StyleSheet} from "react-native"

import Icon from "react-native-vector-icons/dist/MaterialIcons"

import { width, height } from "../../../../../style";
import { TouchableWithoutFeedback, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import TutooButtonOrange from "../../../../../components/button/TutooButtonOrange";
import { navigationLoginRegisterPassawordScreen } from "../../../../../router/actions/User/Register";
import { requestValidationPhoneExist } from "../../../../../redux/actions/User/request";
import { connect } from "react-redux";
import FlatBall from "../../Register/components/flat/flatBall";
import TutooAlert from "../../../../../components/alert/TutooAlert";

const CODE_LENGTH = new Array(6).fill(0);

class LoginVerificationPhone extends React.Component{

    input = React.createRef()

    state = {
        value : "",
        focused : false,
        isActive : false
    }

    onActiveAlert = () =>{
        this.setState(state => {
            return {
                isActive : !state.isActive
            }
        }) 
     }

    handleClick = () => {
        this.input.current.focus()
    }


    handleChange = (value) => {
        this.setState(state => {
            if(state.value.length >= CODE_LENGTH.length) return null
            return {
                value : (state.value + value).slice(0,CODE_LENGTH.length)
            }
        })
    }

    handleKeyPress = e => {
        if(e.nativeEvent.key === "Backspace"){
            this.setState(state => {
                return {
                    value : state.value.slice(0,state.value.length - 1)
                }
            })
        }
    }

    handleFocus = () => {
        this.setState({ focused : true })
    }

    handleBlur = () => {
        this.setState({ focused : false })
    }

    verificationCode = () => {
        const { navigation , user } = this.props
        const { value } = this.state

        console.warn(value)

        if(value.length === CODE_LENGTH.length ){
            console.warn(user.user)
            requestValidationPhoneExist({ device_id : user.user.device_id , code : value  },function(typeDispatch,data,response){
                console.log(response)
                console.log(data)
                navigation.dispatch(navigationLoginRegisterPassawordScreen)
            }).then((response) => {
                console.log(response)
            }).catch((error) =>{
                console.log(error)
                this.onActiveAlert()
            })
            return
        }
        this.onActiveAlert()

    }

    render(){
        const { value, focused , isActive } = this.state;
        const values = value.split("");


        const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;
  
        const hideInput = !(values.length < CODE_LENGTH.length);

        return(
            <View style={{flex : 1 , alignItems : "center" , justifyContent : "space-between" }} >
                <TutooAlert icon={<Icon name='check' size={30} color="white" />} buttons={[{ title : "OK!" , onPress : () => this.onActiveAlert() }]} message={"Algo deu errado !! Solicita novamente os dados de Entrada."} isActive={isActive} />

                <ImageBackground source={require("../../../../../res/images/png/bar_wallpaper.png")} style={{ width  , height : height * 0.25 , alignItems : "center" , marginBottom : 40 }} imageStyle={{ resizeMode : "stretch" }} >
                    <FlatBall image={require("../../../../../res/images/png/confimation_phone.png")} style={{ width : 100 , height : 80 }} imageStyle={{ resizeMode : "cover" }} />
                </ImageBackground>
                <View>
                    <Text style={{ textAlign : "center" , color : "#6d6e71" , fontSize : 24 , fontWeight : "bold" , marginBottom : 5 }} >VERIFICAÇÃO</Text>
                    <Text style={{ textAlign : "center" , color : "#6d6e71" , fontSize : 16  }} >{`Enviamos uma mensagem para você \ncom o código de ativação`}</Text>
                </View>
                <View style={styles.container} >
                   <TouchableWithoutFeedback onPress={this.handleClick} >
                        <View style={styles.wrap} >
                            <TextInput
                               value={""}
                               ref={this.input}
                               onChangeText={this.handleChange}     
                               onKeyPress={this.handleKeyPress}
                               onFocus={this.handleFocus}
                               style={[
                                   styles.input,
                                   {
                                    left: selectedIndex * 32,
                                    opacity: hideInput ? 0 : 1,
                                  },
                               ]}                   
                            />
                            {
                                CODE_LENGTH.map((v,index) => {
                                    const selected = values.length === index
                                    const filled = values.length == CODE_LENGTH.length && index === CODE_LENGTH.length - 1
                                    const removeBorder = index === CODE_LENGTH.length - 1? styles.noBorder : undefined

                                return (
                                    <View style={[styles.display]} key={index}>
                                      <Text style={styles.text}>{values[index] || ""}</Text>
                                      {(selected || filled) && focused && <View style={styles.shadows} />}
                                    </View>
                                  )
                                })
                            }
                        </View>
                   </TouchableWithoutFeedback>
                </View>
                <View style={{ marginBottom : 50 }} >
                    <TouchableOpacity style={{ textAlign : "center" }} >
                        <Text style={{ color : "#459be6" , textDecorationLine : "underline" , textAlign : "center" , paddingVertical : 10 }} >{ "Reenviar código de verificação" }</Text>
                    </TouchableOpacity>
                    <TutooButtonOrange style={{width : width * 0.75 }} text="VALIDAR CÓDIGO" onPress={() => this.verificationCode()} />
                </View>
                
            </View>
        )
    }

}

const mapStateProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateProps)(LoginVerificationPhone)


const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center"
    },
    wrap: {
        position: "relative",
        flexDirection: "row",
      },
      input: {
        position: "absolute",
        fontSize: 32,
        textAlign: "center",
        backgroundColor: "transparent",
        width: 32,
        top: 0,
        bottom: 0,
      },
      display: {
        borderBottomWidth: 1,
        borderBottomColor : "rgba(0,0,0,0.2)",
        width: 32,
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      },
      text: {
        fontSize: 32,
      },
      noBorder: {
        borderBottomWidth: 0,
      },
      shadows: {
        position: "absolute",
        left: -4,
        top: -4,
        bottom: -4,
        right: -4,
        borderColor: "rgba(58, 151, 212, 0.28)",
        borderWidth: 4,
      },
})