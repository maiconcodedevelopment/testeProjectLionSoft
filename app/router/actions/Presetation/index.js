import { NavigationActions } from "react-navigation";

export const navigationPresetationScreen = NavigationActions.navigate({
    routeName : "Presetation",
    params : {},
    action : NavigationActions.navigate({
        routeName : "Presetation"
    })
})
