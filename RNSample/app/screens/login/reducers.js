import {
    USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, CLEAR_DATA, USER_LOGOUT
} from "./actionTypes";
import consumerData from '../../common/customData.json';

export const loginReducers = (state = { data: null, isLoading: false, error: null }, { type, payload }) => {

    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                //data: payload,
                data: consumerData,
                error: null,
                isLoading: false,
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        case CLEAR_DATA:
            return {
                ...state,
                error: null,
                isLoading: false,
                data: null
            };
        case USER_LOGOUT:
            return state;
        default:
            return state;
    }
};