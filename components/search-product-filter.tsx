import { CHARACTERISTIC_NAME } from "@/types/characteristicName";
import styles from "../styles/search.module.css";
import CustomRadioButtonPair from "./custom-radio-button-pair";
import CustomSelect from "./custom-select";
import CustomSlider from "./price-slider";

export default function SearchProductFilter({ searchParams, addSearchParams }: { searchParams: any, addSearchParams: any }) {

    return (
        <div className={styles.filter}>
            <CustomRadioButtonPair
                defaultSelectedValue={searchParams['petAge']}
                setRadioValue={(age: any) => addSearchParams('petAge', age)}
                value1={"0"}
                value2={"1"}
                label1={"0-1"}
                label2={"1+"}
            >
            </CustomRadioButtonPair>
            <CustomRadioButtonPair
                defaultSelectedValue={searchParams['petType']}
                setRadioValue={(type: any) => addSearchParams('petType', type)}
                value1={"cat"}
                value2={"dog"}
                label1={"Cat"}
                label2={"Dog"}
            >
            </CustomRadioButtonPair>

            <CustomSelect labels={CHARACTERISTIC_NAME} isMultiple={true} values={searchParams['characteristics']}
                handleValueChange={(values: any) => addSearchParams('characteristics', values)} />

            <CustomSlider max={30} label={"Price"}
                defaultValue={searchParams['price'] || 30} step={1}
                setSelectedValue={(price: number) => addSearchParams('price', price)} />
            <CustomSlider max={5} label={"Rating"}
                defaultValue={5} step={0.1}
                setSelectedValue={(rating: number) => addSearchParams('rating', rating)} />
        </div>
    )
}