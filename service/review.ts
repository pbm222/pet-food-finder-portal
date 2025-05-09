import { Page } from "@/types/page";
import { Review } from "@/types/review";
import axios from "axios";
import qs from "qs";

export const createReview = async (review: Partial<Review>) => {
    return axios.post(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/reviews`, review)
        .then((response) => {
            return response.status;
        })
        .catch(err => console.error('Error creating review with id :' + err));
}

export const getAllReviews = async (page: Page) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/reviews`, { params: { page: page.page, size: page.size } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting reviews: ' + err));
}

export const getReview = async (id: any) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/reviews/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting review with id :' + id, err));
}

export const getActiveReviewsForProduct = async (productId: any, page: Page) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/reviews`, { params: { productId: productId, isActive: true, page: page.page, size: page.size } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting reviews: ' + err));
}