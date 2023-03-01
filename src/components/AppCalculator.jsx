import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

export default function AppCalculator() {
  const [values, setValues] = useState({});
  const handleClick = (e) => {
    setValues((prevState) => calculate(prevState, e.target.innerText));
  };

  return (
    <div className="btnContainer">
      <Display value={(values.total || values.next || 0)} />
      <div className="pnlButtonsContainer">
        <div className="pnlMainButtons">
          <div className="pnlRow">
            <Button name="AC" onclick={(e) => handleClick(e)} />
            <Button name="+/-" onclick={(e) => handleClick(e)} />
            <Button name="%" onclick={(e) => handleClick(e)} />
            <Button name="÷" addClass="orange" onclick={(e) => handleClick(e)} />
          </div>
          <div className="pnlRow">
            <Button name="7" onclick={(e) => handleClick(e)} />
            <Button name="8" onclick={(e) => handleClick(e)} />
            <Button name="9" onclick={(e) => handleClick(e)} />
            <Button name="x" addClass="orange" onclick={(e) => handleClick(e)} />
          </div>
          <div className="pnlRow">
            <Button name="4" onclick={(e) => handleClick(e)} />
            <Button name="5" onclick={(e) => handleClick(e)} />
            <Button name="6" onclick={(e) => handleClick(e)} />
            <Button name="-" addClass="orange" onclick={(e) => handleClick(e)} />
          </div>
          <div className="pnlRow">
            <Button name="1" onclick={(e) => handleClick(e)} />
            <Button name="2" onclick={(e) => handleClick(e)} />
            <Button name="3" onclick={(e) => handleClick(e)} />
            <Button name="+" addClass="orange" onclick={(e) => handleClick(e)} />
          </div>
          <div className="pnlRow">
            <Button name="0" addClass="doblesize" onclick={(e) => handleClick(e)} />
            <Button name="." onclick={(e) => handleClick(e)} />
            <Button name="=" addClass="orange" onclick={(e) => handleClick(e)} />
          </div>
        </div>
      </div>
    </div>
  );
}
