import axios from "axios";


export async function callAPI(method, url, data, header, params) {

    return await axios({
        method: method,
        url: url,
        data: data ? data : null,
        header: header ? header : null,
        params: params ? params : null,
        withCredentials: true,
    });
}