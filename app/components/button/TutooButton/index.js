import React from "react"
import { View , Text , Button , TouchableNativeFeedback , StyleSheet } from "react-native";

class TutooButton extends React.Component{

    render(){

        const { style , text , onPress } = this.props

        return(
            <TouchableNativeFeedback onPress={() => onPress()} >
                <View style={[style,styles.button]} >
                   <Text style={[styles.text]} >{text}</Text>
                </View>
            </TouchableNativeFeedback>
            
        )
    }

}

export default TutooButton;


const styles = StyleSheet.create({
    button : {
        borderWidth : 2,
        borderColor : "white",
        borderRadius : 8,
        paddingVertical : 8,
        alignItems : "center"
    },
    text : {
        fontSize : 18,
        color : "white"
    }
})