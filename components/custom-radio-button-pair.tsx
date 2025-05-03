import { HStack, RadioGroup } from "@chakra-ui/react"

export default function CustomRadioButtonPair({ setRadioValue, value1, value2, label1, label2, defaultSelectedValue }: {
    setRadioValue: any, value1: string, value2: string, label1: string, label2: string, defaultSelectedValue?: string
}) {

    return (
        <RadioGroup.Root colorPalette="teal" className="w-content"
            value={defaultSelectedValue} onValueChange={(e) => setRadioValue(e.value)}>
            <HStack gap="6">

                <RadioGroup.Item value={value1}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{label1}</RadioGroup.ItemText>
                </RadioGroup.Item>

                <RadioGroup.Item value={value2}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{label2}</RadioGroup.ItemText>
                </RadioGroup.Item>

            </HStack>
        </RadioGroup.Root>
    )
}