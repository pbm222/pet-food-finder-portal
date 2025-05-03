import { HStack, Slider } from "@chakra-ui/react";

export default function CustomSlider({ setSelectedValue, label, defaultValue, max, step }:
  { setSelectedValue: any, label: string, defaultValue: number, max: number, step?: number }) {

  return (
    <Slider.Root size="sm" colorPalette="green" width="full"
      step={step} max={max}
      defaultValue={[defaultValue]}
      onValueChange={({ value }) => { setSelectedValue(value[0]) }}>
      <HStack justify="space-between">
        <Slider.Label>{label}</Slider.Label>
        <Slider.ValueText />
      </HStack>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}