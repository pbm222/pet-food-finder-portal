import { PET_TYPE_NAME } from "@/types/petTypeName";
import { Product } from "@/types/product";
import { Box, Card } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/product-card.module.css";

export default function ProductCard({ product }: { product: Product }) {
    const router = useRouter();

    const isValidUrl = (url: string) => {
        return typeof url === 'string' && (/^https?:\/\//.test(url) || url.startsWith('/'));
    }

    return (
        <Card size="3" key={product.id} className={styles.product_card}
            onClick={() => router.push(`/product/list/${product.id}`)}>
            <div>
                <img
                    src={isValidUrl(product.imgUrl) ? product.imgUrl : '/pet-food-icon.svg'}
                    alt="Product icon"
                    width={100}
                    height={100}
                />
                <Box className={styles.product_description_section}>
                    <p className="heading_4_bold">{product.title}</p>
                    <p className="heading_4">For {PET_TYPE_NAME[product.petType]}</p>
                    <p>{product.descriptionShort}</p>
                    <div><span className="txt_green_bold">Origin:</span> {product.origin}</div>
                    <div className={styles.price_rating_section}>
                        <div className={styles.product_rating}>
                            <p className="txt_green_bold">{product.rating}</p>
                            {product.rating && <Image
                                src="/star.png"
                                alt="Star icon"
                                width={20}
                                height={20}
                                objectPosition="center"
                                priority
                            />}
                        </div>
                        <div className="txt_green_bold">{product.price}€</div>
                    </div>
                </Box>
            </div>
        </Card>
    )
}