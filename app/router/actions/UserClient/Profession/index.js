import { NavigationActions } from "react-navigation";

export const navigationProfessionScrenn = NavigationActions.navigate({
    routeName : "Profession",
    params : {},
    action : NavigationActions.navigate({
        routeName : "Profession"
    })
})