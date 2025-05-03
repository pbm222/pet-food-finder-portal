export default function RadioButtonPair({ setRadioValue, selectedValue, value1, value2, text1, text2 }:
    {
        setRadioValue: any, selectedValue: string,
        value1: string, value2: string,
        text1: string, text2: string
    }) {

    return (
        <form>
            <label className="radio_input">
                <input
                    type="radio"
                    className="txt_light_green"
                    name="pet"
                    value={value1}
                    checked={selectedValue === value1}
                    onChange={() => setRadioValue(value1)}
                />
                {text1}
            </label>
            <label className="radio_input">
                <input
                    type="radio"
                    className="txt_light_green"
                    name="pet"
                    value={value2}
                    checked={selectedValue === value2}
                    onChange={() => setRadioValue(value2)}
                />
                {text2}
            </label>
        </form>
    )
}