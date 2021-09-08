import API from '../../BaseApi';

const AnalystApi = {

  getDashBoarData() {
    const url = `admin/analyst`;
    return API.makeGetRequest(url);
    },
};

export default AnalystApi;