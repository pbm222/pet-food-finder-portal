'use client';

import Image from "next/image";
import styles from "./../../styles/main-page.module.css";
import { useEffect, useState } from "react";
import { UserData } from "@/types/userData";
import { getAllUsers } from "@/service/user";
import { JOB_TITLES } from "@/types/jobTitleName";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setIsLoading } from "@/redux/slices/loadingSlice";

export default function AboutUs() {
    const dispatch = useDispatch<AppDispatch>();
    const [groupedEmployees, setGroupedEmployees] = useState<Record<string, UserData[]>>({});

    useEffect(() => {
        dispatch(setIsLoading(true));

        getAllUsers()
            .then((response) => {
                const employees = groupByJobTitle(response.content);
                setGroupedEmployees(employees);
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(setIsLoading(false)));
    }, []);

    const groupByJobTitle = (employees: UserData[]): Record<string, UserData[]> => {
        const groupedByJobTitle =
            employees.reduce((acc: Record<string, UserData[]>, emp) => {
                if (!acc[emp.jobTitle]) {
                    acc[emp.jobTitle] = [];
                }
                acc[emp.jobTitle].push(emp);
                return acc;
            }, {});

        return groupedByJobTitle;
    }


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
                        <div className="heading_3 _bold">
                            Welcome to PetFoodFinder portal – your trusted companion in finding the best food for
                            your furry, feathered, or scaled friends.
                        </div>
                    </div>
                    <div className={styles.bg_light_blue}>
                        <div className={styles.list_text_element}>
                            <div className="txt_light_green">
                                At PetFoodFinder, we know that every pet is unique—and so are their dietary needs.
                                That’s why we’ve created a one-stop platform that brings together the widest range of pet
                                food options from leading brands and trusted retailers.
                                Whether you’re looking for grain-free kibble, high-protein wet food, or specialized diets
                                for allergies or age-specific needs, we help you find the perfect match, faster and easier.
                            </div>
                        </div>
                        <div className={styles.list_text_element}>
                            <div className="heading_3_bold">Why PetFoodFinder?</div>
                            <div className="txt_light_green">
                                We were born from a simple idea: pet parents deserve a smarter way to shop.
                                Navigating countless stores and comparing ingredients, prices, and availability can be overwhelming.
                                PetFoodFinder simplifies that process by aggregating products, reviews, nutritional info, and deals—all in one place.
                            </div>
                        </div>
                        <div className={styles.list_text_element}>
                            <div className="heading_3_bold">Our Mission</div>
                            <div className="txt_light_green">Our mission is to empower pet owners with knowledge, choice, and convenience.
                                We believe well-fed pets are happy, healthy pets, and we’re here to support every pet family on their journey.</div>
                        </div>
                        <div className={styles.list_text_element}>
                            <div className="heading_3_bold">What We Offer</div>
                            <div className="txt_light_green">🐾 Comprehensive Search & Filters
                                Find the right food by pet type, dietary needs, brand, or price.
                            </div><br />
                            <div className="txt_light_green">🛒 Price Comparison
                                See real-time prices from multiple retailers and never overpay again.
                            </div><br />
                            <div className="txt_light_green">🐶 Verified Reviews & Ratings
                                Learn from other pet owners’ experiences before you buy.
                            </div><br />
                            <div className="txt_light_green">🧠 Expert Resources
                                Access tips and insights from veterinarians and nutritionists.
                            </div><br />
                        </div>
                        <div className={styles.employee_list}>
                            <div className="heading_3_bold">Our employee</div>

                            {Object.entries(groupedEmployees).map(([jobTitle, group]: [string, UserData[]]) => (
                                <div key={jobTitle}>
                                    <div className="heading_4">{JOB_TITLES[jobTitle]}s</div>
                                    <div className={styles.employee_list}>
                                        {group.map((emp: any) => (
                                            <div className="txt_light_green" key={emp.name}>{emp.name} {emp.surname}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}