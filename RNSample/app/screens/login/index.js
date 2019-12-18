import Login from "./components/login";
import * as epics from './epics';
import * as reducers from './reducers';
import {combineReducers} from 'redux';

export const loginEpic = Object.values(epics);
export const loginCombineReducer = combineReducers({
    ...reducers
})

export {
    Login
};
