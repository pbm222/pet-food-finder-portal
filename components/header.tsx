'use client';

import logoImg from "@/public/logo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/header.module.css";
import CustomDrawer from "./custom-drawer";

export default function Header() {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div></div>
            <Image
                className={styles.logo}
                src={logoImg}
                alt="Pet food finder logo"
                onClick={() => router.push("/")}
            />
            <Image
                className={styles.logo}
                src="/hamburger-menu-white.svg"
                height={30}
                width={30}
                alt="Hamburger menu icon"
                onClick={() => setOpenMenu(true)}
            />
            {openMenu && <CustomDrawer setOpen={(e: boolean) => setOpenMenu(e)} />}

        </header>
    )
}