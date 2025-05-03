import axios from "axios";
import qs from "qs";

export const getAllUsers = async () => {
    return axios.get(`http://localhost:8080/users`)
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting users: ' + err));
}

export const getUsersByParams = async (searchFilter: any) => {
    return axios.get(`http://localhost:8080/users`,
        { params: searchFilter, paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }) })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting users: ' + err));
}