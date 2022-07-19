import React from 'react'

type propsType = {
    inputValue: number
    selectValue: string
    changeNumber: (number: number) => void
}
export const Form: React.FC<propsType> = ({ inputValue, selectValue, changeNumber }) => {
    // @ts-ignore
    let newNumberElement = React.useRef<HTMLDivElement>(-1);

    const changeLocalNumber = () => {
        // @ts-ignore
        if (newNumberElement.current.value >= 0) changeNumber(newNumberElement.current.value)
    }
    return (
        <form>
            <input type="number" value={inputValue} onChange={changeLocalNumber} ref={newNumberElement} />
            <select value={selectValue} name="" id="">
                <option value="BTC">BTC</option>
                <option value="UAN">UAN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </form>
    )
}