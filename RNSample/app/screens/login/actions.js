import {actionCreator} from "../../common/utils";
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, CLEAR_DATA, USER_LOGOUT} from "./actionTypes";

export const userLogin = actionCreator(USER_LOGIN);
export const userLoginSuccess = actionCreator(USER_LOGIN_SUCCESS);
export const userLoginFailure = actionCreator(USER_LOGIN_FAILURE);
export const clearData = actionCreator(CLEAR_DATA);
export const userLogout = actionCreator(USER_LOGOUT);