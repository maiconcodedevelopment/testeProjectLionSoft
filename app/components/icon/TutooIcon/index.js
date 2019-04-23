import React from "react"
import { View , Image , StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import QRCode from "../../../res/icons/png/qrcode.png"

export const Icon = (props) => {

    // let icon = "../../../res/icons/png/"+ props.icon +".png"

    // console.log(icon)

   return (<View style={props.style}> 
          {/* <Image style={styles.icon} source={QRCode} /> */}
   </View>) 
}


const styles = StyleSheet.create({
    icon : {
        width : 30,
        height : 30
    }
})