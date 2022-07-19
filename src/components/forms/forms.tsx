import React, { useState } from 'react'
import { stateType } from '../../App'
import { Form } from './form'

type propsType = {
    state: stateType
}

export const Forms: React.FC<propsType> = ({state}) => {
    const [firstFormNumber, setFirstFormNumber] = useState<number>(0)
    const [secondFormNumber, setSecondFormNumber] = useState<number>(0)
    const [firstFormSelect, setFirstFormSelect] = useState<string>('BTC')
    const [secondFormSelect, setSecondFormSelect] = useState<string>('USD')

    const changeFirstNumber = (newNumber: number) => {
        setFirstFormNumber(newNumber)
        if (firstFormSelect === secondFormSelect) return setSecondFormNumber(newNumber)
        if (firstFormSelect === 'EUR') {
            if (secondFormSelect === 'UAN') return setSecondFormNumber(newNumber * state.EUR.buy)
            if (secondFormSelect === 'USD') return setSecondFormNumber(newNumber * state.EUR.buy / state.USD.buy)
            if (secondFormSelect === 'BTC') return setSecondFormNumber(newNumber * state.EUR.buy / state.USD.buy / state.BTC.buy )
        } else if (firstFormSelect === 'BTC') {
            if (secondFormSelect === 'USD') return setSecondFormNumber (newNumber * state.BTC.buy)
            if (secondFormSelect === 'UAN') return setSecondFormNumber (newNumber * state.BTC.buy * state.USD.buy)
            if (secondFormSelect === 'EUR') return setSecondFormNumber (newNumber * state.BTC.buy * state.USD.buy / state.EUR.buy)
        } else if (firstFormSelect === 'USD') {
            if (secondFormSelect === 'UAN') return setSecondFormNumber (newNumber * state.USD.buy)
            if (secondFormSelect === 'EUR') return setSecondFormNumber (newNumber * state.USD.buy / state.EUR.buy)
            if (secondFormSelect === 'BTC') return setSecondFormNumber (newNumber / state.BTC.buy)
        } else if (firstFormSelect === 'UAN') {
            if (secondFormSelect === 'USD') return setSecondFormNumber (newNumber / state.USD.buy)
            if (secondFormSelect === 'EUR') return setSecondFormNumber (newNumber / state.EUR.buy)
            if (secondFormSelect === 'BTC') return setSecondFormNumber (newNumber / state.USD.buy / state.BTC.buy)
        }
    }

    const changeSecondNumber = (newNumber: number) => {
        setSecondFormNumber(newNumber)
        if (firstFormSelect === secondFormSelect) return setFirstFormNumber(newNumber)
        if (secondFormSelect === 'EUR') {
            if (firstFormSelect === 'UAN') return setFirstFormNumber(newNumber / state.EUR.buy)
        }
    }
    return (
        <div>
            <div>
                <Form inputValue={firstFormNumber} selectValue={firstFormSelect} changeNumber={changeFirstNumber} />
            </div>
            <div>
                <Form inputValue={secondFormNumber} selectValue={secondFormSelect} changeNumber={changeSecondNumber}/>
            </div>
        </div>
    )
}