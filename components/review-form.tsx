import { createReview } from "@/service/review";
import { Review } from "@/types/review";
import { Field, Input, Stack, Textarea } from "@chakra-ui/react";
import { StatusCodes } from "http-status-codes";
import { useParams } from "next/navigation";
import { useState } from "react";
import CustomSlider from "./price-slider";
import styles from "./../styles/product-details.module.css";

export default function ReviewForm({ saveReview }: { saveReview: any }) {
    const { id } = useParams();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [review, setReview] = useState<Partial<Review>>({ productId: String(id) });

    const handleReviewChange = (name: string, value: any) => {
        setReview({ ...review, [name]: value });
    };

    const addReview = (e: any) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (!review?.text || !review?.title) return;

        createReview(review)
            .then(status => {
                if (status === StatusCodes.OK || status === StatusCodes.NO_CONTENT) {
                    saveReview();
                }
            }).catch(error => console.log(error));
    }

    return (
        <div className={styles.review_form}>
            <div className="heading_4_bold">Write a Review</div>
            <form onSubmit={addReview}>
                <Stack gap="4" align="flex-start" width="lvw">
                    <Field.Root invalid={isSubmitted && !review.title}>
                        <Input
                            name="title"
                            placeholder="Title"
                            onChange={(e) => handleReviewChange(e.target.name, e.target.value)} />
                    </Field.Root>
                    <Field.Root invalid={isSubmitted && !review.text}>
                        <Textarea
                            name="text"
                            placeholder="Write your review here"
                            onChange={(e) => handleReviewChange(e.target.name, e.target.value)} />
                    </Field.Root>

                    <CustomSlider
                        label={"Rating"}
                        defaultValue={5}
                        setSelectedValue={(value: number) => handleReviewChange('rating', value)}
                        max={5}
                        step={1}>
                    </CustomSlider>

                    <button type="submit" className="btn_green_sm">Send</button>
                </Stack>
            </form>
        </div>
    )
}