import { Page } from "@/types/page";
import { Review } from "@/types/review";
import api from "@/utils/axios";

export const createReview = async (review: Partial<Review>) => {
    return api.post(`/reviews`, review)
        .then((response) => {
            return response.status;
        })
        .catch(err => console.error('Error creating review with id :' + err));
}

export const getAllReviews = async (page: Page) => {
    return api.get(`/reviews`, { params: { page: page.page, size: page.size } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting reviews: ' + err));
}

export const getReview = async (id: any) => {
    return api.get(`/reviews/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting review with id :' + id, err));
}

export const getActiveReviewsForProduct = async (productId: any, page: Page) => {
    return api.get(`/reviews`, { params: { productId: productId, isActive: true, page: page.page, size: page.size } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting reviews: ' + err));
}