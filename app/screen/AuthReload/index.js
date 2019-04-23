import React from "react";

import { View , RecursiveArray , ActivityIndicator , StatusBar , StyleSheet } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import  LinearGradient from "react-native-linear-gradient";

import { colors } from "../../style";
import { navigationPresetationScreen } from "../../router/actions/Presetation";
import { navigationUserClientScrenn } from "../../router/actions/UserClient";
import { requestUserSet } from "../../redux/actions/User/request";
import { connect } from "react-redux";

class AuthReload extends React.Component{


    static navigationOptions  = ({navigation }) => {
        return {
            header : null
        }
    }

    constructor(props){
        super(props)
        this._verifyAuth()
    }

    async _verifyAuth(){
        const { navigation , dispatch } = this.props
        await AsyncStorage.getItem("token").then(value => {
            console.log(value)
            if(value){
                requestUserSet({ token : value }).then(({ typeDispatch , data , response }) => {
                   dispatch(typeDispatch(response))
                }).then(() => {
                    navigation.dispatch(navigationUserClientScrenn)
                })
            }else{
                navigation.dispatch(navigationPresetationScreen)
            }
        })
    }

    render(){
        return(
            <LinearGradient style={styles.container} colors={[colors.orangeDark,colors.orangeClear]} >
                <ActivityIndicator size="large" color="white" />
                <StatusBar barStyle="default" />
            </LinearGradient>
        )
    }
}

export default connect()(AuthReload)

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})