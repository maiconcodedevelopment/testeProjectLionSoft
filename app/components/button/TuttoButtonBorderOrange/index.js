import React from "react"
import { View , Text , Button , TouchableNativeFeedback , StyleSheet } from "react-native";

class TutooButtonBorderOrange extends React.Component{

    render(){

        const { style , text , onPress } = this.props

        return(
            <TouchableNativeFeedback onPress={() => onPress()} >
                <View style={[style,styleButton.button]} >
                   <Text style={[styleButton.text]} >{text}</Text>
                </View>
            </TouchableNativeFeedback>
            
        )
    }

}

export default TutooButtonBorderOrange;


const styleButton = StyleSheet.create({
    button : {
        borderWidth : 2,
        borderColor : "#fe4103",
        borderRadius : 8,
        paddingVertical : 8,
        alignItems : "center"
    },
    text : {
        fontSize : 18,
        color : "#fe4103"
    }
})