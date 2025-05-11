import api from "@/utils/axios";

export const getDescriptionsForProduct = async (productId: string) => {
    return api.get(`/descriptions`, { params: { productId: productId } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting descriptions: ' + err));
}