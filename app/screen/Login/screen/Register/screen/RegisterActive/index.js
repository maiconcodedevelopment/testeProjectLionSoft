import React from "react"
import { View , Text , TextComponent , ImageBackground, TextInputAndroidProperties } from "react-native"
import { width, height } from "../../../../../../style";
import FlatBall from "../../components/flat/flatBall";

import { connect } from "react-redux";
import TutooButtonBorderOrange from "../../../../../../components/button/TuttoButtonBorderOrange";
import { navigationUserClientScrenn } from "../../../../../../router/actions/UserClient";

class LoginRegisterActive extends React.Component{

    render(){
        const { user , navigation } = this.props

        return(
            <View style={{flex : 1 , alignItems : "center" , justifyContent : "space-between" }} >
                <ImageBackground source={require("../../../../../../res/images/png/bar_wallpaper.png")} style={{ width , height : height * 0.25 , alignItems : "center" , marginBottom : 40 }} imageStyle={{ resizeMode : "stretch" }} >
                    <FlatBall image={require("../../../../../../res/images/png/active_user.png")} style={{ width : 135 , height : 135 }} imageStyle={{ resizeMode : "cover" }} />
                </ImageBackground>

                <View>
                    <Text style={{ textAlign : "center" , color : "#6d6e71" , fontSize : 24 , fontWeight : "bold" , marginBottom : 5 }} >PARABÉNS, {user.name} </Text>
                    <Text style={{ textAlign : "center" , color : "#6d6e71" , fontSize : 16  }} >{`Agora você pode aproveitar \ntodas as vantagens do Tutoo!`}</Text>
                </View>

                <View style={{ marginBottom : 50 }} >
                    <TutooButtonBorderOrange style={{width : width * 0.75 }} text={"COMEÇAR"} onPress={() => navigation.dispatch(navigationUserClientScrenn)} />
                </View>
            </View>
        )
    }
} 

let mapStateProps = (state) => ({
    user : state.user.user
})

export default connect(mapStateProps)(LoginRegisterActive);