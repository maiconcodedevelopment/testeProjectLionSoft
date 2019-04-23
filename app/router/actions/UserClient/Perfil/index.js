import { NavigationActions } from "react-navigation";

export const navigationPerfilScreen = NavigationActions.navigate({
    routeName : "Perfil",
    params : {},
    action : NavigationActions.navigate({
        routeName : "Perfil"
    })
})