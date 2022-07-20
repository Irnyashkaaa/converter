import React from 'react'

type propsType = {
    inputValue: number
    selectValue: string
    changeNumber: (number: number, select: string) => void
}
export const Form: React.FC<propsType> = ({ inputValue, selectValue, changeNumber }) => {
    let newNumberElement = React.useRef<any>(-1);
    const newSelectElement = React.useRef<any>('UAN')

    const changeLocalState = () => {
        if (newNumberElement.current.value >= 0) changeNumber(newNumberElement.current.value, newSelectElement.current.value)
    }

    return (
        <form>
            <input type="number" value={inputValue} onChange={changeLocalState} ref={newNumberElement} />
            <select onChange={changeLocalState} value={selectValue} name="" id="" ref={newSelectElement}>
                <option value="BTC">BTC</option>
                <option value="UAN">UAN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </form>
    )
}