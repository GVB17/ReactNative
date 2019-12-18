import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";

import {loginCombineReducer, loginEpic} from "../screens/login";

const appReducer = combineReducers({
    loginCombineReducer,
});

const rootEpic = combineEpics(
    ...loginEpic,
);

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

const epicMiddleware = createEpicMiddleware();
const store = createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

export default store;