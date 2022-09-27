import { useEffect, useState } from 'react';
import React from 'react'
import './App.css';
import { Header } from './components/header/header';
import { Forms } from './components/forms/forms';
import axios from 'axios';
import { useAPI } from './hooks/useAPI';
type currencyType = {
  base_ccy: string,
  buy: number,
  sale: number,
  ccy?: string
}
export type stateType = {
  USD: currencyType
  EUR: currencyType
  BTC: currencyType
}

const App = () => {

  const initCurr: currencyType = {
    base_ccy: '', 
    buy: 0, 
    sale: 0,
  }
  const data = useAPI(fetchTodos)
  const state: stateType = {
    USD: initCurr,
    EUR: initCurr,
    BTC: initCurr
  }

  

  if (data[0]) {
    state.BTC = data[0][2]
    state.EUR = data[0][1]
    state.USD = data[0][0]
  }
  
  function fetchTodos() {
    return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
  }

  

  return (
    <div className="App">
      <Header state={state}/>
      <Forms state={state}/>
    </div>
  );
}

export default App;
