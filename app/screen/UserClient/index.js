import React from "react"
import { View, Text , NativeModules } from "react-native"
import { connect } from "react-redux";
import TutooHeaderMenu from "../../components/header/TutooHeaderMenu";
import TextInputMask from 'react-native-text-input-mask';
import DeviceInfo from "react-native-device-info";

let modules = NativeModules.DeviceId

export default class UserClient extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        header: <TutooHeaderMenu navigation={navigation} onOpenDrawer={() => navigation.toggleDrawer()} />
      });

    input = ""

    constructor(props){
        super(props)
        
        state = {
            value : ""
        }
    }


    componentDidAmount(){
        this.input.onFocus()
    }

    render(){
        return(
            <View>
            </View>
        )
    }

}

let mapStateProps = state => ({
    user : state.user.user
})
