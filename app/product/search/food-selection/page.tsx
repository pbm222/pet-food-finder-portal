'use client';

import FoodTypeSelector from "@/components/food-type-selector";
import CustomSlider from "@/components/price-slider";
import { setMaxPrice } from "@/redux/slices/searchSlice";
import { AppDispatch } from "@/redux/store";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSearch = async () => {
    router.push('/product/list');
  }

  return (
    <section className="inner_layout">
      <div className="heading_1_bold">What are your pet food preferences?</div>
      <FoodTypeSelector />

      <div className="heading_2_bold">What is a max price you are ready to spend?</div>
      <CustomSlider max={30} label={"Price"}
        defaultValue={30} step={1}
        setSelectedValue={(price: number) => dispatch(setMaxPrice(price))}>
      </CustomSlider>

      <div className="btn_light_green">
        <Button className="p_btn" onClick={handleSearch}>Search</Button>
      </div>
    </section>
  )
}