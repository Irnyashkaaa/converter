import React from 'react'
import './App.css';
import { Header } from './components/header/header';
import { Forms, formsDataType } from './components/forms/forms';
import axios from 'axios';
import { useAPI } from './hooks/useAPI';
// import { createStore } from './redux/store';
import { firstFormReducer } from './redux/first-form-reducer';
import { createStore } from 'redux';
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
//@ts-ignore
const store = createStore(firstFormReducer, {
  firstForm: {
    number: 0,
    select: 'UAN'
  },
  secondForm: {
    number: 0, 
    select: "UAN"
  }
})

const App: React.FC = () => {
  
  const initCurr: currencyType = {
    base_ccy: '', 
    buy: 0, 
    sale: 0,
  }
  const data = useAPI(fetchTodos)
  const currState: stateType = {
    USD: initCurr,
    EUR: initCurr,
    BTC: initCurr
  }

  if (data[0]) {
    currState.BTC = data[0][2]
    currState.EUR = data[0][1]
    currState.USD = data[0][0]
  }
  
  function fetchTodos() {
    return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
  }

  

  return (
    <div className="App">
      <Header state={currState}/>
      <Forms store={store} dataCurr={currState}/>
    </div>
  );
}

export default App;
