import axios from "axios";


export async function callAPI(method, url, data, header, body, params) {

    return await axios ({
        method: method,
        url: url,
        data: data ? data : null,
        header: header ? header : null,
        body,
        params: params ? params : null,
        withCredentials: true,
    
    });
    
}

