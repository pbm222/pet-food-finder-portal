'use client';

import styles from "../../../../styles/pet-selection.module.css";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { setPetType, setPetAge } from "@/redux/slices/searchSlice";
import { RootState } from "@/redux/store";
import RadioButtonPair from "@/components/radio-button-pair";

export default function Page() {
  const dispatch = useDispatch();
  const { petType, petAge } = useSelector((state: RootState) => state.search.search);

  const setPetAgeValue = (age: string) => {
    dispatch(setPetAge(age));
  }

  return (
    <section className="inner_layout">
      <div className="heading_1_bold">Tell us about your pet</div>
      <div className={styles.pet_selection_container}>
        <div className={styles.pet_selector}>
          <Image
            className={`${petType === 'dog' ? styles.selected : ''} ${styles.icon}`}
            src="/dog-icon.svg"
            alt="Dog icon"
            width={0}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
            objectPosition="center"
            priority
            onClick={(event) => dispatch(setPetType('dog'))}
          />
        </div>

        <div className={styles.pet_selector}>
          <Image
            className={`${petType === 'cat' ? styles.selected : ''} ${styles.icon}`}
            src="/cat-icon.svg"
            width={0}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
            alt="Cat icon"
            objectPosition="center"
            priority
            onClick={() => dispatch(setPetType('cat'))}
          />
        </div>
      </div>
      <div className={styles.pet_age_selection_container}>
        <div className="heading_2_bold">What is your pet age?</div>
        <RadioButtonPair
          setRadioValue={setPetAgeValue}
          selectedValue={petAge}
          value1={"0"}
          value2={"1"}
          text1={"0-1"}
          text2={"1+"}
        >
        </RadioButtonPair>
      </div>
      <div className="btn_light_green">
        <Link className="p_btn" href="/product/search/food-selection">Continue</Link>
      </div>
    </section>
  )
}