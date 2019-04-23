import React from "react"
import { View , ImageBackground , RecursiveArray , StyleSheet } from "react-native"
import { colors } from "../../../style";


const HEIGHT_AVATAR = 70
const WIDTH_AVATAR = 70

class AvatarPerfil extends React.Component{

    render(){
        const { image } = this.props
        return(
            <View style={styles.container} >
                <ImageBackground source={image} style={{width : WIDTH_AVATAR , height : HEIGHT_AVATAR}} resizeMode="cover" >
                </ImageBackground>
            </View>

        )
    }
}

export default AvatarPerfil;

const styles = StyleSheet.create({
    container : {
        width : WIDTH_AVATAR,
        height : HEIGHT_AVATAR,
        backgroundColor : "white",
        borderRadius : 150
    }
})