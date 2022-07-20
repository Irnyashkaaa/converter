import React, { useState } from 'react'
import { stateType } from '../../App'
import { Form } from './form'

type propsType = {
    state: stateType
}

export const Forms: React.FC<propsType> = ({ state }) => {
    const [firstFormNumber, setFirstFormNumber] = useState<number>(0)
    const [secondFormNumber, setSecondFormNumber] = useState<number>(0)
    const [firstFormSelect, setFirstFormSelect] = useState<string>('BTC')
    const [secondFormSelect, setSecondFormSelect] = useState<string>('USD')

    const changeFirstNumber = (newNumber: number, select: string) => {
        setFirstFormNumber(newNumber)
        setFirstFormSelect(select)
        if (select === secondFormSelect) return setSecondFormNumber(newNumber)
        switch (select) {
            case 'EUR':
                switch (secondFormSelect) {
                    case ('UAN'):
                        setSecondFormNumber(newNumber * state.EUR.buy)
                        break
                    case ('USD'):
                        setSecondFormNumber(newNumber * state.EUR.buy / state.USD.buy)
                        break
                    case ('BTC'):
                        setSecondFormNumber(newNumber * state.EUR.buy / state.USD.buy / state.BTC.buy)
                        break
                }
                break;
            case ('BTC'):
                switch (secondFormSelect) {
                    case ('USD'):
                        setSecondFormNumber(newNumber * state.BTC.buy)
                        break
                    case ('UAN'):
                        setSecondFormNumber(newNumber * state.BTC.buy * state.USD.buy)
                        break
                    case ('EUR'):
                        setSecondFormNumber(newNumber * state.BTC.buy * state.USD.buy / state.EUR.buy)
                        break
                }
                break
            case ('USD'):
                switch (secondFormSelect) {
                    case ('UAN'):
                        setSecondFormNumber(newNumber * state.USD.buy)
                        break
                    case ('EUR'):
                        setSecondFormNumber(newNumber * state.USD.buy / state.EUR.buy)
                        break
                    case ('BTC'):
                        setSecondFormNumber(newNumber / state.BTC.buy)
                        break
                }
                break
            case ('UAN'):
                switch (secondFormSelect) {
                    case ('USD'):
                        setSecondFormNumber(newNumber / state.USD.buy)
                        break
                    case ('EUR'):
                        setSecondFormNumber(newNumber / state.EUR.buy)
                        break
                    case ('BTC'):
                        setSecondFormNumber(newNumber / state.USD.buy / state.BTC.buy)
                        break
                }
                break
        }
    }

    switch (secondFormSelect) {
        case ('USD'):
            break
        case ('UAN'):
            break
        case ('EUR'):
            break
    }


    const changeSecondNumber = (newNumber: number, select: string) => {
        setSecondFormNumber(newNumber)
        setSecondFormSelect(select)
        if (firstFormSelect === select) return setFirstFormNumber(newNumber)
        switch (select) {
            case 'EUR':
                switch (firstFormSelect) {
                    case ('UAN'):
                        setFirstFormNumber(newNumber * state.EUR.buy)
                        break
                    case ('USD'):
                        setFirstFormNumber(newNumber * state.EUR.buy / state.USD.buy)
                        break
                    case ('BTC'):
                        setFirstFormNumber(newNumber * state.EUR.buy / state.USD.buy / state.BTC.buy)
                        break
                }
                break;
            case ('BTC'):
                switch (firstFormSelect) {
                    case ('USD'):
                        setFirstFormNumber(newNumber * state.BTC.buy)
                        break
                    case ('UAN'):
                        setFirstFormNumber(newNumber * state.BTC.buy * state.USD.buy)
                        break
                    case ('EUR'):
                        setFirstFormNumber(newNumber * state.BTC.buy * state.USD.buy / state.EUR.buy)
                        break
                }
                break
            case ('USD'):
                switch (firstFormSelect) {
                    case ('UAN'):
                        setFirstFormNumber(newNumber * state.USD.buy)
                        break
                    case ('EUR'):
                        setFirstFormNumber(newNumber * state.USD.buy / state.EUR.buy)
                        break
                    case ('BTC'):
                        setFirstFormNumber(newNumber / state.BTC.buy)
                        break
                }
                break
            case ('UAN'):
                switch (firstFormSelect) {
                    case ('USD'):
                        setFirstFormNumber(newNumber / state.USD.buy)
                        break
                    case ('EUR'):
                        setFirstFormNumber(newNumber / state.EUR.buy)
                        break
                    case ('BTC'):
                        setFirstFormNumber(newNumber / state.USD.buy / state.BTC.buy)
                        break
                }
                break
        }
    }
    return (
        <div>
            <div>
                <Form inputValue={firstFormNumber} selectValue={firstFormSelect} changeNumber={changeFirstNumber} />
            </div>
            <div>
                <Form inputValue={secondFormNumber} selectValue={secondFormSelect} changeNumber={changeSecondNumber} />
            </div>
        </div>
    )
}