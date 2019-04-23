import { NavigationActions } from "react-navigation";

export const navigationUserClientScrenn = NavigationActions.navigate({
    routeName : "UserClient",
    params : {},
    action : NavigationActions.navigate({
        routeName : "UserClient"
    })
})