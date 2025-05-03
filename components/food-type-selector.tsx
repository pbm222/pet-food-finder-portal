import { CheckboxCards, Flex } from "@radix-ui/themes";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "@/redux/store";
import { toggleFoodType } from "@/redux/slices/searchSlice";

export default function FoodTypeSelector() {
    const dispatch = useDispatch<AppDispatch>();
    const { characteristics } = useSelector((state: RootState) => state.search.search);

    return(
      <Flex gap="3">
      <CheckboxCards.Root size="1" variant='classic' className='d-flex card_checkbox_container' onValueChange={(e) => dispatch(toggleFoodType(e))}>
        <CheckboxCards.Item className={`card_checkbox ${characteristics.includes('DRY') ? 'selected' : ''}`} value="DRY">Dry</CheckboxCards.Item>
        <CheckboxCards.Item className={`card_checkbox ${characteristics.includes('WET') ? 'selected' : ''}`} value="WET">Wet</CheckboxCards.Item>
        <CheckboxCards.Item className={`card_checkbox ${characteristics.includes('HYPOALLERGENIC') ? 'selected' : ''}`} value="HYPOALLERGENIC">Hypoallergenic</CheckboxCards.Item>
        <CheckboxCards.Item className={`card_checkbox ${characteristics.includes('GRAIN_FREE') ? 'selected' : ''}`} value="GRAIN_FREE">Grain free</CheckboxCards.Item>
        <CheckboxCards.Item className={`card_checkbox ${characteristics.includes('WHEAT_FREE') ? 'selected' : ''}`} value="WHEAT_FREE">Wheat free</CheckboxCards.Item>
        <CheckboxCards.Item className={`card_checkbox ${characteristics.includes('SENSITIVE_STOMACH') ? 'selected' : ''}`} value="SENSITIVE_STOMACH">Sensitive stomach</CheckboxCards.Item>
      </CheckboxCards.Root>
    </Flex>
    )
}