import React from "react"
import { View , Text , Picker, StyleSheet } from "react-native"
import { colors } from "../../../style";

class PickerDran extends React.Component{

    state = {
        language : ""
    }

    render(){

        const { style , title , values , value , onValueChange } = this.props

        console.log("values change picker")
        console.log(values)

        return(
               <View style={[style, { borderBottomWidth : 1 , borderBottomColor : colors.orangeDark , marginBottom : 5  }]} >
                   <Text style={{ fontSize : 16 , color : colors.orangeDark}} > { title }</Text>
                   <Picker
                   style={[styles.picker]}
                   itemStyle={{ position : "absolute" , left : 0 , top : 5 }}
                   itemTextStyle={{ fontSize : 18 , color : "blue"}}
                   selectedValue={value}
                   onValueChange={(itemValue, itemIndex) =>
                       onValueChange(itemValue)
                   }
                   >
                    <Picker.Item key={`unselectable`} label="Por favor selecione uma opção..." value="" />
                   {
                       values.map((item,index) => 
                           <Picker.Item key={index} label={item.label} value={item.value} />
                       )
                   }
                </Picker>
               </View>
                

        )
    }

}

export default PickerDran

const styles = StyleSheet.create({
    picker : {
        width : "100%",
        height : 41.4
    }
})