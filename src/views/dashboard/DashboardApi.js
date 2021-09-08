import API from '../../BaseApi';

const DashboardApi = {

  getDashBoarData() {
    const url = `admin/analyst`;
    return API.makeGetRequest(url);
    },
    getAuthToken(body) {
        const url = 'auth/token'
    
       return API.makePostRequest(url, body);
    }
};

export default DashboardApi;