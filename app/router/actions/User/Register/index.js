import { NavigationActions } from  "react-navigation"

export const navigationLoginRegisterScreen = NavigationActions.navigate({
   routeName : "LoginRegister",
   params : {},
   action : NavigationActions.navigate({
       routeName : "LoginRegister"
   })
})


export const navigationLoginVerificationPhoneScreen = NavigationActions.navigate({
    routeName : "LoginVerificationPhone",
    params : {},
    action : NavigationActions.navigate({
        routeName : "LoginVerificationPhone"
    })
})

export const navigationLoginRegisterPassawordScreen = NavigationActions.navigate({
    routeName : "LoginRegisterPassword",
    params : {},
    action : NavigationActions.navigate({
        routeName : "LoginRegisterPassword"
    })
})

export const navigationLoginRegisterActiveScreen = NavigationActions.navigate({
    routeName : "LoginRegisterActive",
    params : {},
    action : NavigationActions.navigate({
        routeName : "LoginRegisterActive"
    })
})