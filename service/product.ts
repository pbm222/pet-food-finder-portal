import { Page } from "@/types/page";
import api from "@/utils/axios";
import qs from "qs";

export const getProduct = async (id: any) => {
    return api.get(`/products/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting product with id :' + id, err));
}

export const getAllProducts = async (page: Page) => {
    return api.get(`/products`, { params: page })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting products: ' + err));
}

export const getProductsByParams = async (searchFilter: any, page: Page) => {
    return api.get(`/products`,
        { params: { ...searchFilter, page: page.page, size: page.size }, paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }) })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting products: ' + err));
}