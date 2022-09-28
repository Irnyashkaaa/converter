import React, { useEffect, useState } from 'react'
import { stateType } from '../../App'
import { Form } from './form'
import s from './forms.module.css'

type formDataType = {
    select: string,
    number: number
}
export type formsDataType = {
    firstForm: formDataType,
    secondForm: formDataType
}

export const Forms: React.FC<{store: any, dataCurr: stateType}> = ({ store, dataCurr }) => {

    const state: formsDataType = store.getState()

    const [rerender, setRerender] = useState<boolean>(false)
    store.subscribe(() => setRerender(!rerender))

    const changeNumberOrSelect = (number: number, select: string, formIndex: 1 | 2) => {
        store.dispatch({type: 'CHANGE_NUMBER', number: number, select: select, formIndex: formIndex, currData: dataCurr })        
    }
    return (
        <div className={s.forms}>
            <div>
                <Form inputValue={state.firstForm.number} 
                selectValue={state.firstForm.select}
                changeNumberOrSelect={(number: number, select: string) => changeNumberOrSelect(number, select, 1)}/>
            </div>
            <div>
                <Form inputValue={state.secondForm.number} 
                selectValue={state.secondForm.select}
                changeNumberOrSelect={(number: number, select: string) => changeNumberOrSelect(number, select, 2)}/>
            </div>
        </div>
    )
}










    

   