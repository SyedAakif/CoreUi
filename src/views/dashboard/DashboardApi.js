import API from '../../BaseApi';

export default {

  getDashBoarData() {
    const url = `admin/analyst`;
    return API.makeGetRequest(url);
    },
    getAuthToken(body) {
        const url = 'auth/token'
        debugger
       return API.makePostRequest(url, body);
    }
};