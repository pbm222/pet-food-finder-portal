export interface Product {
    id: string;
    title: string;
    petType: string;
    petAge: number;
    brand: string;
    rating: number;
    price: number;
    origin: string;
    descriptionShort: string;
    imgUrl: string;
    characteristics: string[];
}

export interface Description {
    id: string;
    title: string;
    text: string;
    productId: string;
}

export interface Retailer {
    id: string;
    name: string;
    price: number;
    isAuthorized: boolean;
    productId: string;
}