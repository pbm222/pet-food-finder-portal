import api from "@/utils/axios";
import qs from "qs";

export const getAllUsers = async () => {
    return api.get(`/users`)
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting users: ' + err));
}

export const getUsersByParams = async (searchFilter: any) => {
    return api.get(`/users`,
        { params: searchFilter, paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }) })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting users: ' + err));
}