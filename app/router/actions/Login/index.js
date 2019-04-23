import { NavigationActions } from "react-navigation";

export const navigationLoginScreen = NavigationActions.navigate({
    routeName : "Login",
    params : {},
    action : NavigationActions.navigate({
        routeName : "Login"
    })
})
