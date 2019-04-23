import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient"
import AvatarPerfil from "../../avatar/avatarPerfil";
import { colors, fontWeight } from "../../../style";
import DrawerItem from "./components/DrawerItem"

import { connect } from "react-redux";
import { navigationPerfilScreen } from "../../../router/actions/UserClient/Perfil";

class DrawerLeft extends React.Component{
  render(){
    console.log(this.props)
    const { user , navigation } = this.props
    return(
      <View style={styles.container}>
       <ScrollView>
         <LinearGradient colors={[ colors.orangeDark , colors.orangeClear]} >
           <View style={styles.header} >
             <AvatarPerfil image={require("../../../res/images/png/logo_tutoo.png")} />
             <Text style={styles.titleName}>{ user.name }</Text>
             {/* <Text style={styles.titleName}>Client</Text> */}
           </View>
         </LinearGradient>

         <View style={styles.contentItems} >
           <DrawerItem icon={require("../../../res/icons/png/menu_item_1.png")}  style={{ paddingHorizontal : 5, borderBottomWidth : 1 , borderBottomColor : colors.blackDark }}  title="Me ajuda" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
           <DrawerItem icon={require("../../../res/icons/png/perfil.png")}       style={{ paddingHorizontal : 5, borderBottomWidth : 1 , borderBottomColor : colors.blackDark }}  title="Perfil" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
           <DrawerItem icon={require("../../../res/icons/png/menu_item_3.png")}  style={{ paddingHorizontal : 5, borderBottomWidth : 1 , borderBottomColor : colors.blackDark }}  title="Meu Cartões" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
           <DrawerItem icon={require("../../../res/icons/png/menu_item_4.png")}  style={{ paddingHorizontal : 5, borderBottomWidth : 1 , borderBottomColor : colors.blackDark }}  title="Recarregar" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
           <DrawerItem icon={require("../../../res/icons/png/menu_item_5.png")}  style={{ paddingHorizontal : 5, borderBottomWidth : 1 , borderBottomColor : colors.blackDark }}  title="Configurar cartão" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
           <DrawerItem icon={require("../../../res/icons/png/menu_item_6.png")}  style={{ paddingHorizontal : 5, borderBottomWidth : 1 , borderBottomColor : colors.blackDark }}  title="Sacar" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
           <DrawerItem icon={require("../../../res/icons/png/menu_item_7.png")}  style={{ paddingHorizontal : 5, borderBottomWidth : 1 , borderBottomColor : colors.blackDark }}  title="Ajustes" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
           <DrawerItem icon={require("../../../res/icons/png/menu_item_8.png")}  style={{ paddingHorizontal : 5  }}  title="Ajustes" onPress={() => navigation.dispatch(navigationPerfilScreen)} />
         </View>
        </ScrollView>
      </View>
    )
  }
}

let mapStateProps = state => ({
  user : state.user.user
})

export default connect(mapStateProps)(DrawerLeft)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    height : 180,
    alignItems : "center",
    justifyContent : "center",
  },
  titleName : {
    textTransform :"uppercase",
    color : "white",
    fontSize : 14,
    paddingVertical : 10,
    fontWeight : fontWeight.medium
  },
  contentItems : {
    paddingHorizontal : 15
  }
});
