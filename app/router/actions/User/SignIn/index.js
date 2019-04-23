import { NavigationActions } from "react-navigation";

export const navigationSignInScreen = NavigationActions.navigate({
    routeName : "SignIn",
    params : {},
    action : NavigationActions.navigate({
        routeName : "SignIn"
    })
})
