import React from "react"
import { View , Image , Animated , StyleSheet  } from "react-native"
import { connect } from "react-redux";
import { stateAllProps } from "../../../redux/maps";
import { width, colors } from "../../../style";
import { LeftElement } from "./components/leftElement";
import { CenterElement } from "./components/CenterElement";
import { RightElement } from "./components/RightElement";

const HEIGHT = 40
const HEIGHT_STATUS_BAR = 30

class TutooHeaderMenu extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            isActive : false,
            aniCard : new Animated.Value(0)
        }
    }

    onActive = () => {


        this.setState((state) => {
            return {
                isActive : !state.isActive
            }
        },() => {
            Animated.timing(this.state.aniCard,{
                toValue : this.state.isActive ? 1 : 0,
                duration : 200
            }).start()
        })
        
    }

    render(){
        const { isActive } = this.state
        const { onOpenDrawer } =  this.props

        let animatedTop = this.state.aniCard.interpolate({
            inputRange : [0,1],
            outputRange : [ -50 , -100 ]
        })

        return(
            <View style={styles.container} >
                 <View style={styles.header}/>
                 {/* <View style={styles.statusBar} /> */}
                        <View style={styles.containerHeader} >
                            <Animated.View style={[{ top : animatedTop },{ width : 100 , height : 100 , position : "absolute" , backgroundColor : "white" , borderRadius : 100 , justifyContent : "flex-end" , alignItems : "center" }]} >
                                <Image style={{ width : 80 , height : 80 , position : "absolute" , bottom : -5 }} source={require("../../../res/images/png/logo_tutoo.png")} />
                            </Animated.View>
                            <LeftElement
                             isActive={isActive}
                             onOpenDrawer={onOpenDrawer}
                             icons={[ require("../../../res/icons/png/menu_left.png") , require("../../../res/icons/png/menu_left.png") ]}
                            />
                            <CenterElement 
                              isActive={isActive}
                              onActive={this.onActive}
                             />
                            <RightElement/>
                        </View>
                 <View/>
            </View>
        )
    }
}


export default connect(stateAllProps)(TutooHeaderMenu)



const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.orangeDark,
        alignItems : "center",
        justifyContent : "center",
        height : HEIGHT + HEIGHT_STATUS_BAR ,
        paddingHorizontal : 10,
    },
    header : {
        position : "absolute",
        right : 0,
        left : 0,
        top : 0,
    },
    containerHeader : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        height : HEIGHT + HEIGHT_STATUS_BAR,
        zIndex : 3

    },
    statusBar : {
        height : HEIGHT_STATUS_BAR
    }
})