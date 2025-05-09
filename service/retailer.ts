import axios from "axios";

export const getRetailersForProduct = async (productId: string) => {
    return axios.get(process.env.NEXT_PUBLIC_PET_FOOD_FINDER_API_URL + `/retailers`, { params: { productId: productId } })
        .then((response) => {
            return response.data;
        })
        .catch(err => console.error('Error getting retailers: ' + err));
}