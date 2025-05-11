'use client';

import CustomDialog from "@/components/custom-dialog";
import CustomPagination from "@/components/custom-pagination";
import Rating from "@/components/rating";
import ReviewForm from "@/components/review-form";
import { setIsLoading } from "@/redux/slices/loadingSlice";
import { AppDispatch } from "@/redux/store";
import { getDescriptionsForProduct } from "@/service/description";
import { getProduct } from "@/service/product";
import { getRetailersForProduct } from "@/service/retailer";
import { getActiveReviewsForProduct } from "@/service/review";
import { Page } from "@/types/page";
import { Description, Product, Retailer } from "@/types/product";
import { Review } from "@/types/review";
import { RouteParams } from "@/types/routeParams";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../../../styles/product-details.module.css";

export default function ProductDetails() {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams() as unknown as RouteParams;
    const [product, setProduct] = useState<Partial<Product>>({});
    const [reviews, setReviews] = useState<Review[]>([]);
    const [descriptions, setDescriptions] = useState<Description[]>([]);
    const [retailers, setRetailers] = useState<Retailer[]>([]);
    const [openReviewForm, setOpenReviewForm] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogTextType, setDialogTextType] = useState('');
    const [page, setPage] = useState<Page>({ page: 0, size: 2, totalElements: 1 })

    useEffect(() => {
        if (!id) return;

        dispatch(setIsLoading(true));
        Promise.all([
            getProduct(id),
            getDescriptionsForProduct(id),
            getRetailersForProduct(id),
        ])
            .then(([productRes, descriptionsRes, retailersRes]) => {
                setProduct(productRes);
                setDescriptions(descriptionsRes);
                setRetailers(retailersRes);
            })
            .catch(err => { console.log(err) })
            .finally(() => dispatch(setIsLoading(false)));
    }, [id]);

    useEffect(() => {
        fetchReviews();
    }, [page.page]);

    const handlePageChange = (pageNumber: number) => {
        setPage({ ...page, page: pageNumber });
    };

    const fetchReviews = async () => {
        dispatch(setIsLoading(true));

        getActiveReviewsForProduct(id, page)
            .then((reviewsRes) => {
                setReviews(reviewsRes.content);
                setPage({ ...page, totalElements: reviewsRes.totalElements });
            })
            .catch(err => { console.log(err); })
            .finally(() => dispatch(setIsLoading(false)));;
    };

    const handleDialogOpen = (textType: string) => {
        setDialogTextType(textType);
        setOpenDialog(true);
    }

    const redirectToRetailer = (url: string) => {
        const isUrlValid = typeof url === 'string' && (/^https?:\/\//.test(url) || url.startsWith('/'));
        if (isUrlValid) {
            window.location.href = url;
        }
    }

    const getProductUrl = (): string => {
        const url = product.imgUrl;
        return (url !== undefined && typeof url === 'string' && (/^https?:\/\//.test(url) || url.startsWith('/')))
            ? url
            : '/pet-food-icon.svg';
    }

    return (
        <section>
            <img
                className={styles.product_img}
                src={getProductUrl()}
                height={250}
                width={350}
                alt="Product image"
            />

            <div className={styles.product_info_section}>

                {openDialog && <CustomDialog setOpen={(e: boolean) => setOpenDialog(e)} textType={dialogTextType} />}

                <p className="heading_4_bold">{product?.title}</p>
                <p className="txt_green_bold">min.price €{product?.price}</p>

                <div className={styles.product_info}>
                    <Rating rating={product?.rating || 0} />
                    <p className="txt_green">In stock: {retailers.length} resellers</p>
                </div>

                <div className={styles.retailers_list}>
                    {retailers.map(retailer => (
                        <div className={styles.retailer} onClick={() => redirectToRetailer(retailer.url)}>
                            <div className={styles.product_description_section}>
                                <div>
                                    <p className="heading_3_bold">{retailer.name}</p>
                                    <p className="txt_green">{retailer.isAuthorized ? 'Authorized Reseller' : ''}</p>
                                </div>
                            </div>
                            <div className={styles.price}>{retailer.price}€</div>
                            <Image
                                className={styles.arrow_next_icon}
                                src="/arrow-next-green.svg"
                                height={20}
                                width={15}
                                alt="Arrow next"
                            />
                        </div>
                    ))}

                </div>

                <div className={styles.product_description_list}>
                    {descriptions.map(description => (
                        <div className={styles.description}>
                            <div className="heading_3">{description.title}</div>
                            <div className="txt_light_green">{description.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.reviews_section}>
                <div className="heading_1_bold">Reviews</div>

                <div className={styles.reviews_list}>
                    {reviews.map(review => (
                        <div className={styles.review_card}>
                            <div className="heading_4_bold">{review.title}</div>
                            <Rating rating={review.rating} />
                            <p>{new Date(review.date).toLocaleDateString()}</p>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>

                <CustomPagination
                    setSelectedPage={(page: number) => handlePageChange(page)}
                    totalElements={page.totalElements}
                    currentPage={page.page}
                    pageSize={page.size}>
                </CustomPagination>

                {!openReviewForm && <div className="btn_light_green">
                    <Button className="p_btn" onClick={() => setOpenReviewForm(!openReviewForm)}>Add review</Button>
                </div>}

                {openReviewForm && <ReviewForm saveReview={() => {
                    handleDialogOpen('REVIEW_ADD');
                    setOpenReviewForm(false);
                    fetchReviews();
                }} />}
            </div>
        </section>
    );
}