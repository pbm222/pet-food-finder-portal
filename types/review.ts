export interface Review {
    id: string;
    title: string;
    text: string;
    productId: string;
    rating: number;
    date: Date
    isActive: boolean;
}