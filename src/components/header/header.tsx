import React from 'react'
import s from './header.module.css'
import { stateType } from '../../App'

type propsType = {
    state: stateType
}

export const Header: React.FC<propsType> = ({state}) => {

    return (
        <div className={s.header}>
            <div>
                USD: {`${Math.floor(state.USD.buy * 100) / 100}/${Math.floor(state.USD.sale * 100) / 100}`}
            </div>
            <div>
                EUR: {`${Math.floor(state.EUR.buy * 100) / 100}/${Math.floor(state.EUR.sale * 100) / 100}`}
            </div>
        </div>
    )
}