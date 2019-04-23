import React from "react"
import { View, Text , Image , ImageBackground , ScrollView , StyleSheet , TouchableOpacity , TouchableNativeFeedback , TouchableHighlight ,CameraRoll , PermissionsAndroid , Permission } from "react-native";
import Icon from "react-native-vector-icons/dist/MaterialIcons"
import { height, colors } from "../../../style";

const HEIGHT_AVATAR = 85
const WIDTH_AVATAR = 85

export class TutooContainerPerfilEdition extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            photos : null,
            avatarSource : null
        }
    }

    numberAccountMask(value){
        if(value || value != null){
            return value.match(/.{1,3}/g).join(" ")
        }
        return value
    }

    render(){
        const { goBack , numberAccount , photo , onPickerPhoto } = this.props

        return(
            <View style={styles.container} >
                <View style={styles.header}>

                   <TouchableNativeFeedback style={{ borderRadius : 100 }} onPress={goBack} >
                        <View style={{ width : 35 , height : 35 , alignSelf : "flex-start" , alignItems : "center" , justifyContent : "center" }} >
                               <Icon size={30} color="white" name="arrow-back" />
                        </View>
                    </TouchableNativeFeedback>

                  <Image style={{ width : 50 , position : "absolute" , top : 10 , right : 10 }} source={require("../../../res/icons/png/logo.png")} />

                  <TouchableNativeFeedback onPress={onPickerPhoto}>
                        <View 
                        style={styles.cardPhoto} >
    
                          <View style={styles.photo} >
                            <ImageBackground   source={{ uri : photo }} resizeMode="cover" style={{ width : WIDTH_AVATAR , height : HEIGHT_AVATAR , zIndex : 5 }}  />
                          </View>

                          <View style={{ position : "absolute" , alignItems : "center" , padding : 5, justifyContent : "center" , right : -1 , bottom : -1 , backgroundColor  : "#6d6e71" , borderRadius : 50  }} >
                              <Icon size={20} color="white" name="linked-camera" />
                          </View>
    
                        </View>
                  </TouchableNativeFeedback >


                  <View style={{ 
                      position : "absolute" , 
                      bottom : - 40 - 5 , 
                      right : 50  , 
                      flexDirection : "row" , 
                      alignItems : "center" , 
                      justifyContent : "center" }} >

                        <View style={{ 
                                width : 40, 
                                height : 40, 
                                marginRight : 10, 
                                alignItems : "center", 
                                justifyContent : "center", 
                                backgroundColor : "white", 
                                borderRadius : 100,
                                shadowColor: '#000',
                                shadowOffset: { width: 3, height: 3 },
                                shadowOpacity: 0.5,
                                elevation: 5
                            }} >
                            <Image source={require("../../../res/images/png/logo_tutoo.png")} style={{ width : 30 , height : 30 }} resizeMode="cover" />
                        </View>

                        <Text style={{ color : colors.orangeDark , fontSize : 16 , fontWeight : "bold" }} >{this.numberAccountMask(numberAccount)}</Text>
                  </View>
                  
                </View>

                <ScrollView  horizontal={false} showsVerticalScrollIndicator={false} >
                    <View style={styles.content} >
                       { this.props.children }
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        height :100,
        padding : 10,
        backgroundColor : colors.orangeDark,
        justifyContent : 'flex-start',
        alignItems : "flex-end",
        marginBottom : 70
    },
    content : {
        flexDirection : "row",
        alignItems : "flex-start",
        paddingHorizontal : 10,
        flexWrap : "wrap",
        zIndex : 1
    },
    cardPhoto : {
        zIndex : 1000,
        position : "absolute" , 
        padding : 8 , 
        backgroundColor : "white" ,  
        bottom : -100 + HEIGHT_AVATAR / 2 + 8  ,
        left : 20 , 
        borderRadius : 100, 
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        elevation: 5  
    },
    photo : {
        overflow : "hidden" ,
        alignItems : "center" , 
        justifyContent : "center" ,
        width : WIDTH_AVATAR , 
        height : HEIGHT_AVATAR ,  
        backgroundColor  : "white" , 
        borderRadius : 100 , 
        borderWidth : 5 , 
        borderColor : "green"
    }
})