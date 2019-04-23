import { NavigationActions } from "react-navigation"

export const navigationLocationScreen = NavigationActions.navigate({
    routeName : "Location",
    params : {},
    action : NavigationActions.navigate({
        routeName : "Location"
    })
})