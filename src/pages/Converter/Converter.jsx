import { useState } from 'react';
import { useEffect } from 'react';
import {
  Input,
  Option,
  Select,
  WrapperConvert,
  WrapperSelect,
} from './Converter.styled';

const Converter = () => {
  const currencies = ['USD', 'EUR', 'UAH'];

  const data = JSON.parse(localStorage.getItem('currencyData'));

  const [usdAmound, setUsdAmound] = useState(0);
  const [eurAmound, setEurAmound] = useState(0);
  const [uahAmound, setUahAmound] = useState(1);
  const [firstAmound, setFirstAmound] = useState(0);
  const [secondAmound, setSecondAmound] = useState(0);
  const [firstCurrent, setFirstCurrent] = useState('USD');
  const [secondCurrent, setSecondCurrent] = useState('USD');
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    setUsdAmound(data[0].rateBuy.toFixed(2));
    setEurAmound(data[1].rateBuy.toFixed(2));
    setUahAmound(1);
  }, [data]);

  useEffect(() => {
    if (amountInFromCurrency === true) {
      if (firstCurrent === 'USD' && secondCurrent === 'USD') {
        setSecondAmound(firstAmound);
      }
      if (firstCurrent === 'USD' && secondCurrent === 'EUR') {
        setSecondAmound((firstAmound * (usdAmound / eurAmound)).toFixed(2));
      }
      if (firstCurrent === 'USD' && secondCurrent === 'UAH') {
        setSecondAmound((firstAmound * (uahAmound * usdAmound)).toFixed(2));
      }
      if (firstCurrent === 'EUR' && secondCurrent === 'EUR') {
        setSecondAmound(firstAmound);
      }
      if (firstCurrent === 'EUR' && secondCurrent === 'USD') {
        setSecondAmound((firstAmound * (eurAmound / usdAmound)).toFixed(2));
      }
      if (firstCurrent === 'EUR' && secondCurrent === 'UAH') {
        setSecondAmound((firstAmound * (uahAmound * eurAmound)).toFixed(2));
      }
      if (firstCurrent === 'UAH' && secondCurrent === 'UAH') {
        setSecondAmound(firstAmound);
      }
      if (firstCurrent === 'UAH' && secondCurrent === 'USD') {
        setSecondAmound((firstAmound * (uahAmound / usdAmound)).toFixed(2));
      }
      if (firstCurrent === 'UAH' && secondCurrent === 'EUR') {
        setSecondAmound((firstAmound * (uahAmound / eurAmound)).toFixed(2));
      }
    }
    return;
  }, [
    eurAmound,
    usdAmound,
    firstAmound,
    firstCurrent,
    secondCurrent,
    uahAmound,
    amountInFromCurrency,
  ]);

  useEffect(() => {
    if (amountInFromCurrency === false) {
      if (firstCurrent === 'USD' && secondCurrent === 'USD') {
        setFirstAmound(secondAmound);
      }
      if (firstCurrent === 'USD' && secondCurrent === 'EUR') {
        setFirstAmound((secondAmound * (usdAmound / eurAmound)).toFixed(2));
      }
      if (firstCurrent === 'USD' && secondCurrent === 'UAH') {
        setFirstAmound((secondAmound * (uahAmound * usdAmound)).toFixed(2));
      }
      if (firstCurrent === 'EUR' && secondCurrent === 'EUR') {
        setFirstAmound(secondAmound);
      }
      if (firstCurrent === 'EUR' && secondCurrent === 'USD') {
        setFirstAmound((secondAmound * (eurAmound / usdAmound)).toFixed(2));
      }
      if (firstCurrent === 'EUR' && secondCurrent === 'UAH') {
        setFirstAmound((secondAmound * (uahAmound * eurAmound)).toFixed(2));
      }
      if (firstCurrent === 'UAH' && secondCurrent === 'UAH') {
        setFirstAmound(secondAmound);
      }
      if (firstCurrent === 'UAH' && secondCurrent === 'USD') {
        setFirstAmound((secondAmound * (uahAmound * usdAmound)).toFixed(2));
      }
      if (firstCurrent === 'UAH' && secondCurrent === 'EUR') {
        setFirstAmound((secondAmound * (uahAmound * eurAmound)).toFixed(2));
      }
    }
  }, [
    amountInFromCurrency,
    eurAmound,
    firstCurrent,
    secondAmound,
    secondCurrent,
    uahAmound,
    usdAmound,
  ]);

  function firstCur(e) {
    const newValue = e.currentTarget.value;
    setFirstAmound(newValue);
    setAmountInFromCurrency(true);
  }

  function secondCur(e) {
    const newValue = e.currentTarget.value;
    setSecondAmound(newValue);
    setAmountInFromCurrency(false);
  }

  return (
    <WrapperConvert>
      <h1>Convert</h1>
      <WrapperSelect>
        <Input
          type="number"
          name="firstCurrency"
          onChange={firstCur}
          value={firstAmound}
        />
        <Select
          onChange={e => {
            setFirstCurrent(e.target.value);
            setAmountInFromCurrency(true);
          }}
        >
          {currencies.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </WrapperSelect>
      <div>
        <Input
          type="number"
          name="secondCurrency"
          onChange={secondCur}
          value={secondAmound}
        />
        <Select
          onChange={e => {
            setSecondCurrent(e.target.value);
            setAmountInFromCurrency(true);
          }}
        >
          {currencies.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
    </WrapperConvert>
  );
};

export default Converter;
