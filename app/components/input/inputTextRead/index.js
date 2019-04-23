import React from "react"
import { RecyclerViewBackedScrollViewComponent , RecyclerViewBackedScrollView , View , Text , Image ,TextInput, StyleSheet } from "react-native"
import TextInputMask from 'react-native-text-input-mask';
import { sizeIcon } from "../../../style";

class InputTextRead extends React.Component{

    input = React.createRef()

    render(){
        const { style , icon , onChangeText , placeholder , keyboardType , mask , validation , secureTextEntry  } = this.props

        let textInput = mask ? <TextInputMask
                                style={styles.input}
                                onChangeText={(formatted, extracted) => {
                                    onChangeText(extracted)
                                }}
                                // ref={this.input}
                                keyboardType={keyboardType}
                                secureTextEntry={secureTextEntry}
                                mask={mask}
                                placeholderTextColor={"#6d6e71"}
                                underlineColorAndroid="transparent"
                                placeholder={placeholder} /> :
                               <TextInput
                                // ref={this.input}
                                style={styles.input}
                                onChangeText={onChangeText}
                                secureTextEntry={secureTextEntry}
                                keyboardType={keyboardType}
                                placeholderTextColor={"#6d6e71"}
                                underlineColorAndroid="transparent"
                                placeholder={placeholder} />

        return(
            <View style={[style,styles.container,styles.textInput, { borderColor : validation ? "#ccc" : "#ff4747" }]}>
                <Image style={ { width : 15 , height : 15 } } source={icon} />
                {
                    textInput
                }
            </View>
        )
    }

}

export default InputTextRead;


const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center"
    },
    textInput : {
        borderWidth : 1,
        paddingHorizontal : 15
    },
    input : {
        width : "100%" ,
        padding : 10 ,
        textAlign : "right"  
    }
})