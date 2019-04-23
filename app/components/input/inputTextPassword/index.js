import React from "react"
import { View , RCTNativeAppEventEmitter , Text , TextInput , StyleSheet } from "react-native";

class InputTextPassword extends React.Component{

    render(){
        const { onChangeText , value , placeholder , style } = this.props
        return(
            <View style={styles.containerTextPassword} >
                <TextInput secureTextEntry={true} textContentType="password" value={value}  style={[styles.input,style]} onChangeText={onChangeText} placeholder={placeholder} textAlignVertical="center" />
                
                {/* {
                    new Array(value.length).fill(0).map((value,index) => {
                        return (
                            <Text secureTextEntry={true} >1</Text>
                        )
                    })
                } */}
            </View>
        )
    }
}

export default InputTextPassword;

const styles = StyleSheet.create({
    containerTextPassword : {
        alignItems : "center",
        justifyContent : "center",
        position : "relative"
    },
    input : {
        textAlign : "center",
        borderColor : "#fe4103",
        borderWidth : 2,
        fontSize : 32,
        borderRadius : 8
    }
})