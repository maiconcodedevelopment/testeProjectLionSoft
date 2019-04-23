import { NavigationActions } from "react-navigation"


export const navigationPersonalScreen = NavigationActions.navigate({
    routeName : "Personal",
    params : {},
    action : NavigationActions.navigate({
        routeName : "Personal"
    })
})