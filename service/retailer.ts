import api from "@/utils/axios";

export const getRetailersForProduct = async (productId: string) => {
    return api.get(`/retailers`, { params: { productId: productId } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting retailers: ' + err));
}