import Image from "next/image";
import styles from "../styles/rating.module.css";

export default function Rating({ rating }: { rating: number | 0}) {
    return (
        <div className={styles.rating}>
            <Image
                src="/star.png"
                alt="Star icon"
                width={20}
                height={20}
                objectPosition="center"
                priority
            />
            <p className="txt_green_bold">{rating}</p>
        </div>
    )
}