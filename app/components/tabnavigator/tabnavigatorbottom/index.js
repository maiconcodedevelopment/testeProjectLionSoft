import React from "react"
import { View , Text , FlatList , Image , StyleSheet  } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { navigationLocationScreen } from "../../../router/actions/UserClient/Location";
import { navigationPersonalScreen } from "../../../router/actions/UserClient/Personal";
import { navigationProfessionScrenn } from "../../../router/actions/UserClient/Profession";
import { navigationPersonalityScrenn } from "../../../router/actions/UserClient/Personality";

import { colors } from "../../../style";

export class TabNavigatorBottom extends React.Component{

    state = {
        navigations : [
            {
                name  : `Meus\nDados`,
                icon : require("../../../res/icons/png/perfil_icon_1.png"),
                navigation : navigationPersonalScreen
            },
            {
                name : "Minha\nLocalização",
                icon : require("../../../res/icons/png/perfil_icon_2.png"),
                navigation : navigationLocationScreen
            },
            {
                name : "Profissão",
                icon : require("../../../res/icons/png/perfil_icon_3.png"),
                navigation : navigationProfessionScrenn
            },
            {
                name : "Personalidade",
                icon : require("../../../res/icons/png/perfil_icon_4.png"),
                navigation : navigationPersonalityScrenn
            }
        ]
    }

    render(){
        const { navigations } = this.state
        const { navigation } = this.props
        console.log("aisjdfi ism sim")
        console.log(this.props)
        return(
            <View style={styles.container}>
               <FlatList
                data={navigations}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item,index) => index.toString()}
                contentContainerStyle={{ paddingLeft : 10 }}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => navigation.dispatch(item.navigation)} >
                        <View style={styles.card}>
                           <Image style={{ width : 20 , height : 20 }} source={item.icon} />
                           <Text style={{ color : colors.orangeDark , fontSize : 12  }} >{item.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    
                )}
               />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        paddingVertical : 10
    },
    card : {
        flexDirection : "column",
        justifyContent : "space-between",
        padding : 8,
        width : 100,
        height : 100,
        borderRadius : 4,
        backgroundColor : "white",
        marginRight : 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        elevation: 5
    }
})