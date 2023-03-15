
import {Axios} from 'axios';

export abstract class ApiService { 
    protected http = new Axios({
        baseURL: 'https://ecamstage2-api.multicloud-ibm.com',
        responseType: 'json',
        transformResponse: (data) => JSON.parse(data),
        headers: { 
            'Content-Type': 'application/json',
            'withCredentials': true 
        }
    });
    
}