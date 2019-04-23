import { NavigationActions } from "react-navigation";

export const navigationPersonalityScrenn = NavigationActions.navigate({
    routeName : "Personality",
    params : {},
    action : NavigationActions.navigate({
        routeName : "Personality"
    })
})