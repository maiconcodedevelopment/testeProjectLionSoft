import React from "react"

import { View , Image,  StyleSheet } from "react-native"

class FlatBall extends React.Component{

    render(){

        const { image , imageStyle , style } = this.props

        return(
            <View style={styles.ballIcon} >
                <Image style={style} imageStyle={imageStyle} source={image} />
            </View>
        )
    }
}

export default FlatBall;

const styles = StyleSheet.create({
    ballIcon : {
        width : 150,
        height : 150,
        alignItems : "center",
        justifyContent : "center",
        position : "absolute",
        backgroundColor : "white",
        zIndex : 2,
        bottom : -20,
        borderRadius : 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    }
})