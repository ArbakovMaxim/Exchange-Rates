import { useState } from 'react';
import { useEffect } from 'react';
import { WrapperConvert } from './Converter.styled';

const Converter = () => {
  const length = ['USD', 'EUR', 'UAH'];

  const [usdAmound, setUsdAmound] = useState(0);
  const [eurAmound, setEurAmound] = useState(0);
  const [uahAmound, setUahAmound] = useState(1);
  const [firstAmound, setFirstAmound] = useState(0);
  const [secondAmound, setSecondAmound] = useState(0);
  const [firstCurrent, setFirstCurrent] = useState('USD');
  const [secondCurrent, setSecondCurrent] = useState('USD');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('currencyData'));
    setUsdAmound(data[0].rateBuy.toFixed(2));
    setEurAmound(data[1].rateBuy.toFixed(2));
    setUahAmound(1);
  }, []);

  useEffect(() => {
    if (firstAmound === 0 && firstAmound) {
      return;
    }
    if (firstCurrent === 'USD' && secondCurrent === 'USD') {
      setSecondAmound(firstAmound);
    }
    if (firstCurrent === 'USD' && secondCurrent === 'EUR') {
      setSecondAmound(firstAmound * (usdAmound / eurAmound).toFixed(2));
    }
    if (firstCurrent === 'USD' && secondCurrent === 'UAH') {
      setSecondAmound(firstAmound * (uahAmound * usdAmound).toFixed(2));
    }
    if (firstCurrent === 'EUR' && secondCurrent === 'EUR') {
      setSecondAmound(firstAmound);
    }
    if (firstCurrent === 'EUR' && secondCurrent === 'USD') {
      setSecondAmound(firstAmound * (eurAmound / usdAmound).toFixed(2));
    }
    if (firstCurrent === 'EUR' && secondCurrent === 'UAH') {
      setSecondAmound(firstAmound * (uahAmound * eurAmound).toFixed(2));
    }
    if (firstCurrent === 'UAH' && secondCurrent === 'UAH') {
      setSecondAmound(firstAmound);
    }
    if (firstCurrent === 'UAH' && secondCurrent === 'USD') {
      setSecondAmound(firstAmound * (uahAmound * usdAmound).toFixed(2));
    }
    if (firstCurrent === 'UAH' && secondCurrent === 'EUR') {
      setSecondAmound(firstAmound * (uahAmound * eurAmound).toFixed(2));
    }
  }, [
    eurAmound,
    usdAmound,
    firstAmound,
    firstCurrent,
    secondCurrent,
    uahAmound,
  ]);

  useEffect(() => {
    if (firstCurrent === 'USD' && secondCurrent === 'USD') {
      setFirstAmound(secondAmound);
    }
    if (firstCurrent === 'USD' && secondCurrent === 'EUR') {
      setFirstAmound(secondAmound * (usdAmound / eurAmound).toFixed(2));
    }
    if (firstCurrent === 'USD' && secondCurrent === 'UAH') {
      setFirstAmound(secondAmound * (uahAmound * usdAmound).toFixed(2));
    }
    if (firstCurrent === 'EUR' && secondCurrent === 'EUR') {
      setFirstAmound(secondAmound);
    }
    if (firstCurrent === 'EUR' && secondCurrent === 'USD') {
      setFirstAmound(secondAmound * (eurAmound / usdAmound).toFixed(2));
    }
    if (firstCurrent === 'EUR' && secondCurrent === 'UAH') {
      setFirstAmound(secondAmound * (uahAmound * eurAmound).toFixed(2));
    }
    if (firstCurrent === 'UAH' && secondCurrent === 'UAH') {
      setFirstAmound(secondAmound);
    }
    if (firstCurrent === 'UAH' && secondCurrent === 'USD') {
      setFirstAmound(secondAmound * (uahAmound * usdAmound).toFixed(2));
    }
    if (firstCurrent === 'UAH' && secondCurrent === 'EUR') {
      setFirstAmound(secondAmound * (uahAmound * eurAmound).toFixed(2));
    }
  }, [
    eurAmound,
    firstCurrent,
    secondAmound,
    secondCurrent,
    uahAmound,
    usdAmound,
  ]);

  function firstCur(e) {
    setFirstAmound(e.currentTarget.value);
  }

  function secondCur(e) {
    setSecondAmound(e.currentTarget.value);
  }

  return (
    <WrapperConvert>
      <h1>Convert</h1>
      <div>
        <input
          type="number"
          name="firstCurrency"
          onChange={firstCur}
          value={firstAmound}
        />
        <select
          onChange={e => {
            setFirstCurrent(e.target.value);
          }}
        >
          {length.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>=</div>
      <div>
        <input
          type="number"
          name="secondCurrency"
          onChange={secondCur}
          value={secondAmound}
        />
        <select
          onChange={e => {
            setSecondCurrent(e.target.value);
          }}
        >
          {length.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </WrapperConvert>
  );
};

export default Converter;
