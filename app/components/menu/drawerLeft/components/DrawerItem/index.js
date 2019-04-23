import React from "react"
import {View , Text , Image , TouchableWithoutFeedback , StyleSheet } from "react-native"
import { colors } from "../../../../../style";

class DrawerItem extends React.Component{

    render(){
        const { icon , title , style , onPress } = this.props
        return(
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={[styles.container,style]}>
                   <Image style={styles.iconLeft} source={icon} />
                   <Text style={styles.text} >{title}</Text>
                   <Image style={styles.iconRight} source={require("../../../../../res/icons/png/flexa.png")} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default DrawerItem;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        paddingVertical : 10
    },
    text : {
        flex : 1,
        color : colors.blackDark,
        fontSize : 16
    },
    iconLeft : {
        width : 25,
        height : 25,
        marginRight : 15
    },
    iconRight : {
        width : 18,
        height : 18
    }
})