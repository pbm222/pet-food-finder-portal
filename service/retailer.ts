import axios from "axios";

export const getRetailersForProduct = async (productId: string) => {
    return axios.get(`http://localhost:8080/retailers`, { params: { productId: productId } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting retailers: ' + err));
}