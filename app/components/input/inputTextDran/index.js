import React from "react"
import { View , Text , TextInput , TextComponent , TextInputComponent , StyleSheet } from "react-native"
import TextInputMask from "react-native-text-input-mask"
import { colors } from "../../../style";

class InputTextDran extends React.Component{

    input = React.createRef()

    state = {
        onfocus : false
    }

    render(){
        const { style , title , value , editable , onChangeText , onChangeTextFormatted , onBlur , mask , keyboardType, onSubmitEditing } = this.props

        let textInput = mask ? 
                 <TextInputMask
                    style={{ height : 50 }}
                    fontSize={18}
                    value={value}
                    onBlur={(v) => onBlur(value)}
                    keyboardType={keyboardType}
                    editable={editable}
                    onChangeText={(formatted, extracted) => {
                        onChangeText(extracted)
                        onChangeTextFormatted  ? onChangeTextFormatted(formatted) : null
                    }}
                    underlineColorAndroid={colors.orangeDark}
                    mask={mask}
                 /> :
                 <TextInput
                    fontSize={18}
                    style={{ height : 50 }}
                    value={value}
                    editable={editable}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    onBlur={(v) => onBlur(value)}
                    underlineColorAndroid={colors.orangeDark}/>

        return(
            <View style={[styles.container,style]} >
               <Text style={styles.title} >{title}</Text>
               {
                   textInput
               }
            </View>
        )
    }
}

export default InputTextDran;

const styles = StyleSheet.create({
    container : {
        flexDirection : "column",
    },
    title : {
        fontSize : 16,
        color : colors.orangeDark,
        paddingLeft : 5
    }
})