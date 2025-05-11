import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/main-page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.img_container}>
          <Image
            className={styles.logo}
            src="/main-page-pets.jpg"
            alt="Next.js logo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
        <section className={styles.hero}>
          <div className={styles.bg_white_transparent}>
            <div className="heading_1_bold">Find Your Pet’s Ideal Meal</div>
            <div className="heading_3">Search for the best options tailored to your pet needs.</div>
            <div className="btn_green">
              <Link className="p_btn" href="/product/search/pet-selection">Get Started</Link>
            </div>
          </div>
          <div className={styles.bg_light_blue}>
            <div className={styles.list_text_element}>
              <div className="heading_3_bold">Why choosing us</div>
            </div>
            <div className={styles.list_text_element}>
              <div className="heading_3">Tailored Recommendations</div>
              <div className="txt_light_green">Get pehrsonalized food suggestions based on your criteria.</div>
            </div>
            <div className={styles.list_text_element}>
              <div className="heading_3">Expert Advice</div>
              <div className="txt_light_green">Access tips and insights from pet nutrition experts.</div>
            </div>
            <div className={styles.list_text_element}>
              <div className="heading_3">Community Support</div>
              <div className="txt_light_green">Join a community of pet lovers sharing their experiences.</div>
            </div>
            <div className={styles.list_text_element}>
              <div className="heading_3">Commitment to Pets</div>
              <div className="txt_light_green">Join a community of pet lovers sharing their experiences.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
