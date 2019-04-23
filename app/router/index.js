import React from "react";
import { createAppContainer , createSwitchNavigator, createStackNavigator , createDrawerNavigator, createBottomTabNavigator } from "react-navigation"

import PresentationScreen from "../screen/Presentation";
import { width } from "../style";

//Custrom navigation
import { TabNavigatorBottom } from "../components/tabnavigator/tabnavigatorbottom";

//auth
import AuthReload from "../screen/AuthReload";
import TutooHeaderMenu from "../components/header/TutooHeaderMenu";

//Login Reigster Verification
import LoginScreen from "../screen/Login";
import LoginRegisterScreen from "../screen/Login/screen/Register";
import LoginVerificationPhoneScreen from "../screen/Login/screen/screen/VerificationPhone";
import LoginRegisterPasswordScreen from "../screen/Login/screen/Register/screen/RegisterPassword";
import LoginRegisterActiveScreen from "../screen/Login/screen/Register/screen/RegisterActive";
import LoginSignInScreen from "../screen/Login/screen/SignIn";


//Login Register Verification
import DrawerLeft  from "../components/menu/drawerLeft";
import UserClientScreen from "../screen/UserClient"
import UserClientScreenPerfil from "../screen/UserClient/screen"
import Personal from "../screen/UserClient/screen/Personal"
import Location from "../screen/UserClient/screen/Location";
import Profession from "../screen/UserClient/screen/Profession";
import Personality from "../screen/UserClient/screen/Personality";

let stackContainerUser = createStackNavigator({
    Login : {
        screen : LoginScreen,
        navigationOptions : {
            header : null
        }
    },
    SignIn : {
        screen : LoginSignInScreen,
        navigationOptions : {
            header : null
        }
    },
    LoginRegister : {
        screen : LoginRegisterScreen,
        navigationOptions : {
            header : null
        }
    },
    LoginVerificationPhone : {
        screen : LoginVerificationPhoneScreen,
        navigationOptions : {
            header : null
        }
    },
    LoginRegisterPassword : {
        screen : LoginRegisterPasswordScreen,
        navigationOptions : {
            header : null
        }
    },
    LoginRegisterActive : {
        screen : LoginRegisterActiveScreen,
        navigationOptions : {
            header : null
        }
    }
})

let stackContainerPresentation = createStackNavigator({
    Init : {
        screen :  PresentationScreen,
        navigationOptions : {
            header : null
        }
    }
})



export let RouteBottom = createBottomTabNavigator({
    Personal : Personal,
    Location : Location,
    Profession : Profession,
    Personality : Personality
},{
    tabBarComponent : ({navigation}) => <TabNavigatorBottom navigation={navigation} />,
    // navigationOptions: ({ navigation, screenProps }) => ({
    //     header: null,
    //     headerMode: 'none',
    //     tabBarVisible: false,
    //   }),
})

let createStackUserCLient = createStackNavigator({
    UserClient : {
        screen : UserClientScreen
    }
})

let drawerContainerUserClient = createDrawerNavigator({
    UserClient : createStackUserCLient,
    Perfil : RouteBottom
},{
    drawerPosition : "left",
    contentComponent : DrawerLeft,
    drawerWidth : width
})

let stackAuthRealod = createStackNavigator({
    AuthReload :{
        screen : AuthReload
    }
})

export let RouteContainer = createAppContainer(
    createSwitchNavigator({
        Presetation : stackContainerPresentation,
        Login : stackContainerUser,
        UserClient :  drawerContainerUserClient,
        AuthReload : stackAuthRealod
    },{
        initialRouteName : "AuthReload"
    })
)