import axios from "axios";

export const getDescriptionsForProduct = async (productId: string) => {
    return axios.get(`http://localhost:8080/descriptions`, { params: { productId: productId } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting descriptions: ' + err));
}