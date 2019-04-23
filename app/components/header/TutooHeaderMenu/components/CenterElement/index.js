import React from "react"
import { View , Image ,  ViewComponent , ViewBase , ViewPagerAndroid , Animated , Easing , StyleSheet} from "react-native"
import { sizeIcon } from "../../../../../style"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const iconSize = sizeIcon

export class CenterElement extends React.Component{

    state = {
        ani : new Animated.Value(0)
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.isActive && !this.props.isActive){
             this.onAnimated({ value : 1  })
        }

        if(!nextProps.isActive && this.props.isActive){
            this.onAnimated({ value : 0  })
        }

    }

    onAnimated({ value , isActive }){
        Animated.spring(this.state.ani,{
            toValue : value
        }).start()
    }

    render(){

        const { isActive , onActive } = this.props

        let backAnimated =  this.state.ani.interpolate({
            inputRange : [0,1],
            outputRange : ["rgba(0,0,0,0)","rgba(255,255,255,1)"],
        })

        const textinput = isActive ? <TextInput style={{ flex : 1 }} underlineColorAndroid="transparent" /> : null

        return(
            <Animated.View style={[styles.container, { backgroundColor : backAnimated , height : 35 , marginHorizontal : 10 } ]} >
               <Animated.View style={{ marginLeft : "auto" }} >
                    <TouchableOpacity onPress={onActive} >
                         <Image 
                            style={[iconSize]}
                            source={isActive ? require("../../../../../res/icons/png/menu_item_8.png") : require("../../../../../res/icons/png/search_white.png") } />
                    </TouchableOpacity>
               </Animated.View>
               
               <Animated.View style={{ flex : this.state.ani }} >
                   { textinput }
               </Animated.View>
              
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        flexDirection : "row"
    }
})