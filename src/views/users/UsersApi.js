import API from '../../BaseApi';

const UsersApi = {

  getUsersData() {
    const url = `admin/users`;
    return API.makeGetRequest(url);
    } 
};

export default UsersApi;