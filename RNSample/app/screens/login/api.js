import axios from "axios";
import {getAuthToken, makeURL} from "../../common/utils";
import config from "../../config/config";

export const userLogin$$ = async (payload) => {
    // let authToken = await getAuthToken();
    console.log('API')

    let audit= {
        source: '',
        ipAddress: "",
        deviceID: "",
        phoneNumber: "",
        emailID: ""
    }

    return axios({
        method: "GET",
        url: makeURL(config.endpoints.clientdetails) + "/" + '6454240',
        timeout:Config.axiosTimeOut,
        headers: {
            // 'Authorization': authToken.data.access_token,
            //'Authorization': "bearer"+ " "+payload.accesToken,
            'Authorization': "bearer"+ " "+"1184f58d-d626-41ca-8bbe-c4dd8da1499a",
            "Audit": JSON.stringify(audit)
        }

    }).then(response => response).catch(error => error);
};
