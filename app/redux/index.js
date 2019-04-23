import { createStore , combineReducers } from "redux"

import actionUserReducer from "./actions/User"

let conbineStore = combineReducers({
    user : actionUserReducer
})

export let storeRedux = createStore(conbineStore)