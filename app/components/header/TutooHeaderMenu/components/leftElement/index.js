import React from "react"
import { View , Image , Animated , LayoutAnimation , StyleSheet , TouchableWithoutFeedback , TouchableOpacity } from "react-native"
import { sizeIcon } from "../../../../../style";


export class LeftElement extends React.Component{

    componentWillReceiveProps(nextProps){

        if(nextProps.isActive && !this.props.isActive){
            console.log("sim")
        }

        if(!nextProps.isActive && this.props.isActive){
            console.log("nao")
        }

    }

    render(){
        const { icons , isActive , onOpenDrawer } = this.props

        let icon = isActive ? icons[1] : icons[0]

        return(
            <TouchableOpacity onPress={onOpenDrawer} >
                <View style={styles.container} >
                    <Image source={icon} style={[sizeIcon]} />
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container : {

    },
    icon : sizeIcon
})