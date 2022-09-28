import React, { useEffect } from 'react'
import s from './form.module.css'

type propsType = {
    inputValue: number
    selectValue: string
    changeNumberOrSelect: (number: number, select: string) => void
}
export const Form: React.FC<propsType> = ({ inputValue, selectValue, changeNumberOrSelect }) => {
    
    let newNumberElement = React.useRef<any>(-1);
    const newSelectElement = React.useRef<any>('UAN')

    const changeLocalState = () => {
        if (newNumberElement.current.value >= 0) changeNumberOrSelect(newNumberElement.current.value, newSelectElement.current.value)
    }

    return (
        <form className={s.form}>
            <input className={s.formInput} type="number" value={inputValue} onChange={changeLocalState} ref={newNumberElement} />
            <select className={s.formSelect} onChange={changeLocalState} value={selectValue} name="" id="" ref={newSelectElement}>
                <option value="BTC">BTC</option>
                <option value="UAN">UAN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </form>
    )
}