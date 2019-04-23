import React from "react"
import { View , Vibration , Image } from "react-native";

import { sizeIcon } from "../../../../../style";
import Icon from "../../../../../components/icon/TutooIcon"
import { TouchableOpacity } from "react-native-gesture-handler";


export class RightElement extends React.Component{



    render(){
        return(
            <TouchableOpacity>
               <Image style={ sizeIcon } source={require(`../../../../../res/icons/png/qrcode.png`)} />
            </TouchableOpacity>
        )
    }
}