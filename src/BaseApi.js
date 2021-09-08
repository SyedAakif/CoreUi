import axios from "axios";

const BaseUrl = 'https://dashboard.test.altseasons.com/';

const TokenKey = 'token'

const API = {
      getHeaders() {
    return {
         Authorization: `Bearer ${localStorage.getItem(TokenKey)}`};
  },

    makeGetRequest(url) {
        return axios.get(BaseUrl+url, {headers: this.getHeaders()} );
    },

    makePostRequest(url, body) {
        debugger;
        return axios.post(BaseUrl + url, body,{headers:this.getHeaders()});
    },
    getTokenKey() {
        debugger;
        return TokenKey;
    }
    
};

export default API;
