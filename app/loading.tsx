'use client';

import { BarLoader } from "react-spinners";
import styles from "../styles/loading.module.css";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Loading() {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);

    return (<>
           {isLoading && <div className={styles.loading}><BarLoader color="#064E3B" /></div>}
    </>
    );
}