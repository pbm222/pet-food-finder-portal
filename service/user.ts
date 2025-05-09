import axios from "axios";
import qs from "qs";

export const getAllUsers = async () => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/users`)
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting users: ' + err));
}

export const getUsersByParams = async (searchFilter: any) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/users`,
        { params: searchFilter, paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }) })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting users: ' + err));
}