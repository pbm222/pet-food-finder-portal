import logoImg from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/footer.module.css";

export default function Footer() {

  return (
    <footer className={styles.footer}>

      <Image
        className={styles.logo}
        src={logoImg}
        alt="Pet food finder logo"
      />

      <div className={styles.slogan}>Your Pet s Nutrition Partner</div>

      <div className={styles.links}>
        <div className={styles.list}>
          <div className={styles.list_link_item}>
            Company</div>
          <Link className={styles.list_link_item} href="/about">
            About</Link>
          <div className={styles.list_link_item}>
            Careers</div>
          <div className={styles.list_link_item}>
            Newsroom</div>
        </div>
        <div className={styles.list}>
          <div className={styles.list_heading}>
            Explore Our Features</div>
          <div className={styles.list_link_item}>
            Fast Search</div>
          <div className={styles.list_link_item}>
            Product Cards</div>
          <div className={styles.list_link_item}>
            Latest Updates</div>
        </div>
        <div className={styles.list}>
          <div className={styles.list_heading}>
            Social</div>
          <div className={styles.list_link_item}>
            Twitter</div>
          <div className={styles.list_link_item}>
            Instagram</div>
          <div className={styles.list_link_item}>
            Threads</div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={`txt_light_green ${styles.copyright}`}>© 2024 Pet Food Finder. All rights reserved.</div>

    </footer >);
}