import React from "react"
import { Platform } from "react-native";
import { Text , Button , View , Slider , SliderComponent , SliderProperties ,NativeModules } from "react-native"
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { RouteContainer } from "./router" 

import { Provider , connect } from "react-redux"
import { bindActionCreators } from "redux"
import { storeRedux } from "./redux";

import { userCreate } from "./redux/actions/User/dispatch";


let ToastExample = NativeModules.ToastExample

class TutooReactApplication extends React.Component{

    render(){
        return (
            <Provider store={storeRedux} >
               <RouteContainer/>
               {/* <View>
                   <Text onPress={ () => ToastExample.show("felipe aqui doido",ToastExample.SHORT) }>felipe lindo</Text>
               </View> */}
            </Provider>
        )
    }

}

const mapStateProps = (state) => ({
    user : state.user
})

const mapDispatchProps = (dispatch) => bindActionCreators({ userCreate },dispatch)

// export default connect(mapStateProps,mapDispatchProps)(TutooReactApplication)

export default TutooReactApplication;