import React from "react"
import { View , Image,  ImageBackground ,  Text , Animated , StyleSheet , Alert  } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

import Icon from "react-native-vector-icons/dist/MaterialIcons"
import TutooButton from "../../components/button/TutooButton" 
import TutooAlert from "../../components/alert/TutooAlert";

import { width, height } from "../../style";

import { navigationLoginRegisterScreen } from "../../router/actions/User/Register"
import { navigationSignInScreen } from "../../router/actions/User/SignIn";


class Login extends React.Component{

    state = {
        active : false,
        anim : new Animated.Value(0)
    }

    onActiveAndDective = ()=>{
        this.setState(state => {
            return {
                active : !state.active
            }
        })
    }

    render(){

        const { active } = this.state
        const { navigation } = this.props
        
        return (
            <ImageBackground source={require("../../res/images/png/wallpaper_home.png")} imageStyle={{resizeMode : "cover"}} style={styles.containerLogin} >
                <View style={{ flex : 1 , backgroundColor : "rgba(0,0,0,0.5)" , alignItems : "center" , justifyContent : "space-evenly" , zIndex : 5 }}>
                    <View>
                       <Text style={{ textAlign : "center" , color : "white" , fontSize : 28 , fontWeight : "bold" }} >OLÁ,</Text>
                       <Text style={{ textAlign : "center" , color : "white" , fontSize : 22 , fontWeight : "500" }} >SEJA BEM-VINDO AO</Text>
                    </View>
                    <Image source={require("../../res/images/png/tutto_logo.png")} style={{ width : width * 0.64  }} />
                    <View style={{ flexDirection : "column" }} >
                        <TutooButton style={{ width : width *  0.75  , marginBottom : 10 }} text={`NOVA CONTA`} onPress={() => navigation.dispatch(navigationLoginRegisterScreen)} />
                        <TutooButton style={{ width : width *  0.75  }} text={`ENTRAR`} onPress={() => navigation.dispatch(navigationSignInScreen)} />
                    </View>
                </View>  
                <TutooAlert 
                    isActive={active} 
                    buttons={[
                        { title : "nao" , onPress : this.onActiveAndDective },
                        { title : "sim" , onPress :  () => console.warn("naonao")}]}
                    icon={<Icon name='check' size={30} color="white" />} 
                    onPress={this.onActiveAndDective} 
                    message={`alguma coisa aqui no modal esta sendo criado com sucesso cuidade button big man zajan`}  />
            </ImageBackground>
            
        )
    }

}


export default Login;


const styles = StyleSheet.create({
    containerLogin : {
        width : "100%", 
        height : "100%" ,
        backgroundColor : "rgba(0,0,0,0.6)",
        flex : 1
    },
    alert : {
        width , 
        height , 
        position : "absolute" ,
        top : 0 , 
        bottom : 0 , 
        alignItems :"center" , 
        justifyContent : "center"
    }
})