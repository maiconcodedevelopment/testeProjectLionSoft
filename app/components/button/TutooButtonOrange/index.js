import React from "react";

import { TouchableNativeFeedback , View , Text , StyleSheet } from "react-native";

class TutooButtonOrange extends React.Component{

    render(){

        const { style , text , onPress } = this.props

        return(
            <TouchableNativeFeedback onPress={() => onPress()}>
                <View style={[style,styleButtonOrange.button]} >
                    <Text style={styleButtonOrange.text} >{text}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default TutooButtonOrange;

const styleButtonOrange = StyleSheet.create({
    button : {
        backgroundColor : "#fe4103",
        borderRadius : 8,
        paddingVertical : 8,
        alignItems : "center"

    },
    text : {
        fontSize : 18,
        color : "white"
    }
})