import React from "react"
import { View , Text , ViewComponent } from "react-native"
import { RouteBottom } from "../../../router";
import { Provider , connect } from "react-redux"
import { storeRedux } from "../../../redux";

class Screen extends React.Component{

    static navigationOptions = ({navigation}) => ({
        title : "sim"
    })

    constructor(props){
        super(props)
        console.log(props)
        console.log("asidjfiasd")
    }

    render(){
        return(
            <RouteBottom></RouteBottom>
        )
    }


}

let mapStateProps = state => ({
    user : state.user.user
})

export default connect(mapStateProps)(Screen)