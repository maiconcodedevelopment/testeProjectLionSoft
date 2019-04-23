import React from "react";
import { View , Text , Image , Animated , ScrollView , StyleSheet} from "react-native";

import { NavigationDispatch } from "react-navigation";

import  LinearGradient  from "react-native-linear-gradient"

import { width  } from '../../style';

import  TutooButton from "../../components/button/TutooButton";

import { navigationLoginScreen } from "../../router/actions/Login";

const FIXED_BAR_WIDTH = 180
const BAR_SPACE = 20

class PresentationScreen extends React.Component{

    numItems = 4
    itemWith = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)


    render(){

        const { navigation } = this.props

        let imageArray = []
        let barArray = []

        new Array(1,2,3,4).forEach((element,i) => {

            const scrollBarVal = this.animVal.interpolate({
                inputRange : [width * (i - 1),width * (i + 1)],
                outputRange : [-this.itemWith,this.itemWith],
                extrapolate : "clamp"
            })

            const thisBar = (
                <View key={`bar${i}`} style={[ styles.track , { width : 15 , height : 15, marginLeft : i === 0 ? 0 : BAR_SPACE }]} >
                  <Animated.View style={[ styles.bar , { width : 12 , height : 12 , transform : [ { translateX : scrollBarVal }  ] }]} />
                </View>
            )

            barArray.push(thisBar)

        });

        const ApresentationContainer = props => (
            <View style={{
                flex : 1,
                width,
                alignItems : "center",
                justifyContent : "space-evenly",
                textAlign : "center",
                paddingBottom : 40,
            }} >
                <Image style={{ width : 350 , height : 350 }} source={props.image} />
                <Text style={styles.textApresentation} >{ props.text }</Text>
                { props.children }
            </View>

        )

        return(
            
            <LinearGradient colors={["#fbaf68","#fe4103"]} style={styles.container} >
                <ScrollView
                  horizontal={true}
                  pagingEnabled={true}
                  scrollEventThrottle={10}
                  showsHorizontalScrollIndicator={false}
                  scrollIndicatorInsets={{top : 10,left : 10,bottom : 10,right : 10}}
                  onScroll={Animated.event(
                    [
                        {
                            nativeEvent : { contentOffset : { x : this.animVal } }
                        }
                    ]
                  )}
                  onMomentumScrollBegin={() => {
                      console.log("sim")
                  }}
                >
                    <ApresentationContainer image={require("../../res/images/png/wallpaper_2.png")} text={`Tutoo é dinheiro e vantagem \n NO SEU CELULAR!`} />
                    <ApresentationContainer image={require("../../res/images/png/wallpaper_1.png")} text={`Com Tutoo você pode fazer \n transferências e pagamentos de \n forma fácil, rápida e segura`} />
                    <ApresentationContainer image={require("../../res/images/png/wallpaper_3.png")} text={`Para usar é muito simples. É só preencher  seu cadastro rapidinho e já começar a aproveitar os benefícios.\n \n Para o seu cadastro, vamos precisar do seu CPF, mas fique tranquilo.Ele é usado apenas para sua identificação. Você é bem-vindo no Tutoo mesmo estranho negativado!`} />
                    <ApresentationContainer image={require("../../res/images/png/wallpaper_4.png")} text={`Carregue seu Tutoo em qualquer \n estabelecimento da nossa \n rede autorizada`} >
                       <TutooButton style={{ width : width * 0.65 }} text={`OK, COMEÇAR`} onPress={ () => navigation.dispatch(navigationLoginScreen) } />
                    </ApresentationContainer>
                    
                </ScrollView>
                <View style={styles.barBottom} >
                    {barArray}
                </View>
            </LinearGradient>
        )
    }
}

export default PresentationScreen; 

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    barBottom : {
        position : "absolute",
        bottom : 15,
        flexDirection : "row",
        zIndex : 2,
        paddingVertical : 25
    },
    track : {
        borderWidth : 2,
        borderColor : "white",
        height : 5,
        overflow : "hidden",
        borderRadius : 50,
    },
    bar : {
        backgroundColor : "white",
        height : 5,
        position : "absolute",
        left : 0,
        top : 0,
        borderRadius : 50,
    },
    textApresentation : {
        fontSize : 16,
        textAlign : "center",
        color : "white",
        width : width * 0.8
    }
})