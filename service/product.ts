import { Page } from "@/types/page";
import axios from "axios";
import qs from "qs";

export const getProduct = async (id: any) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/products/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting product with id :' + id, err));
}

export const getAllProducts = async (page: Page) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/products`, { params: page })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting products: ' + err));
}

export const getProductsByParams = async (searchFilter: any, page: Page) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/products`,
        { params: { ...searchFilter, page: page.page, size: page.size }, paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }) })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting products: ' + err));
}