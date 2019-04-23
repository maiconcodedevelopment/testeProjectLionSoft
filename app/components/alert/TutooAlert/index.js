import React from "react";
import { RelayProfiler , View , Text , ViewBase , ViewPagerAndroidComponent , Button , ViewPager  , ViewComponent , Easing , Animated, StyleSheet , Platform } from 'react-native';
import { width , height }  from "../../../style"
import TuttoButtonBorderOrange from "../../button/TuttoButtonBorderOrange";

const platformAndroid = Platform.OS === "android" 


const HEIGHT_CARD = 200
const HEIGHT_CARD_ICON = 70

class TutooAlert extends React.Component{

    state = {
        anim : new Animated.Value(0),
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.isActive && !this.props.isActive ){
            console.log("sim")
            this.animateDispatch({ active : nextProps.isActive , toValue : 1})
        }

        if(!nextProps.isActive && this.props.isActive){
            console.log("nao")
            this.animateDispatch({ active : nextProps.isActive , toValue : 0 })
         
        }
    }

    animateDispatch = ({active , toValue  }) => {
        Animated.timing(this.state.anim,{
            toValue,
            duration : 500
        }).start()
    }

    render(){

        const { onPress , title , message , buttons , icon , iconColorBox } = this.props

        let outAnimated = this.state.anim.interpolate({
            inputRange : [0,1],
            outputRange : ["rgba(0,0,0,0)","rgba(0,0,0,0.5)"],
            extrapolate : "extend",
            useNativeDriver : platformAndroid
        })

        let outzIndex = this.state.anim.interpolate({
            inputRange : [0,1],
            outputRange : [-1,10]
        })

        // let outScaleXY = this.state.anim.interpolate({
        //     inputRange : [0,1],
        //     outputRange : [0,200]
        // })

        let scale = {
            transform : [
                {
                    scale : this.state.anim.interpolate({
                        inputRange : [0,1],
                        outputRange :[0,1],
                        easing : Easing.bounce
                    })
                }
            ]
        }
        
        console.log(buttons)

        return(
            <Animated.View style={[styles.alert,{  backgroundColor : outAnimated , zIndex : outzIndex , opacity : this.state.anim }]} >
                <Animated.View style={[scale,{ width : width * 0.8 , alignItems : "center" , justifyContent : "center", backgroundColor : "white" , borderRadius : 4, height : HEIGHT_CARD , padding : 10 }]} >
                  {
                      icon ? (
                        <View style={[styles.boxIcon,{ backgroundColor : iconColorBox ? iconColorBox : "red" }]} >
                           {
                               icon
                           }
                            {/* <Image source={icon} /> */}
                        </View>
                      ) : null
                  }
                  <View style={[{ flex : 1 , width : "100%" , paddingTop : icon ? HEIGHT_CARD_ICON / 2 : 0 }]} >  
                    <View style={[styles.boxText]}>
                       <Text style={{ textAlign : "center" }} >{message}</Text>
                    </View>
                    {/* <Button style={{ backgroundColor : "red" }} title="confirmado" onPress={onPress} /> */}
                    {
                        buttons.map((button,index) => (
                            <View key={index} style={{ marginTop : 10 }} >
                               <TuttoButtonBorderOrange style={{ width : "100%" }} text={button.title} onPress={button.onPress} />
                            </View>
                        ))
                    }
                  </View>
                </Animated.View> 
            </Animated.View>
        )
    }

}


export default TutooAlert;

const styles = StyleSheet.create({
    alert : {
        width , 
        height , 
        position : "absolute" ,
        top : 0 , 
        bottom : 0 , 
        alignItems :"center" , 
        justifyContent : "center",
    },
    boxIcon : {
         position : "absolute" , 
         alignItems : "center" , 
         justifyContent : "center" , 
         width : HEIGHT_CARD_ICON , 
         height : HEIGHT_CARD_ICON , 
         top : -HEIGHT_CARD_ICON / 2 , borderRadius : 50
    },
    boxText : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
    
})