import { createListCollection, Portal, Select } from "@chakra-ui/react";

export default function CustomSelect({ values, labels, isMultiple, invalid = false, handleValueChange }:
    { values?: string[] | undefined, labels: Record<string, string>, isMultiple?: boolean, invalid?: boolean, handleValueChange: any }) {

    const items = Object.entries(labels).map(
        ([value, label]) => ({ label, value })
    );

    const selectElements = createListCollection({ items: items });

    return (
        <Select.Root size="sm" width="320px" invalid={invalid}
            multiple={isMultiple}
            collection={selectElements}
            value={values}
            defaultValue={values}
            onValueChange={(e) => { handleValueChange(e.value) }}>
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="Select" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Select.Positioner zIndex={2001}>
                <Select.Content>
                    {selectElements.items.map((el) => (
                        <Select.Item item={el} key={el.value}>
                            {el.label}
                            <Select.ItemIndicator />
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Positioner>
        </Select.Root>

    )
}