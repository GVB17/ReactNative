import { Alert, AlertIOS, AsyncStorage, NetInfo, Platform } from "react-native";
//import I18n from "../assets/";
import axios from "axios";
import config from '../config/config';

export const actionCreator = type => payload => ({ type, payload });

export const makeURL = endPoint => {
    if (config.environmentVar_key == 'dev') {
        return `${config.urls.DEV_URL}${endPoint}`;
    }
    else if (config.environmentVar_key == '"production"')
    {
        return `${PROD_URL}${endPoint}`;
    }
    return `${QA_URL}${endPoint}`;
};

export const handleResponse = (response, successHandler, failureHandler) => {
    console.log('handleResponse::::', response)
    if (response.status === 200) {

        if(response.data)
        {
            return successHandler(response.data);
        }
        else
        {
            let message = "server_error";
            let title = "error_key";
            return failureHandler({
                title:title,
                message:message,
            }); 
        }
    }
    else if (response.status === 401) {
        let message = "601";
        let title = "601_title";

        return failureHandler({
            title:title,
            message:message,
 
        }); 

    }

    else {
        if (response.response.data && response.response.data.code != null) {
            let message = 'I18n.t(response.response.data.code)';
            let title = 'I18n.t(response.response.data.code + "_title")';

            return failureHandler({
                title:title,
                message:message,
     
            }); 
        }
        else {
            let message = "server_error";
            let title = "error_key";
            return failureHandler({
                title:title,
                message:message,
            }); 
        }
    }
    return failureHandler(response);
};

export const checkConnection = async () => {
    let connectionInfo = await NetInfo.getConnectionInfo();
    console.log(connectionInfo)
    return connectionInfo.type !== 'none';
};

//Convert string to titleCase
export const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}