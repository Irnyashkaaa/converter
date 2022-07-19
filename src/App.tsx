import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Forms } from './components/forms/forms';
import axios from 'axios';

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

  const [state, setState] = useState<stateType>({
    USD: { base_ccy: 'usd', sale: 0, buy: 0 },
    EUR: { base_ccy: 'eur', sale: 0, buy: 0 },
    BTC: { base_ccy: 'btc', sale: 0, buy: 0 }
  })

  useEffect(() => {
    axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(res => {
        setState({ USD: res.data[0], EUR: res.data[1], BTC: res.data[2] });
      })
  }, [])


  return (
    <div className="App">
      <Header state={state}/>
      <Forms state={state}/>
    </div>
  );
}

export default App;
