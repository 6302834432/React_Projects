import React, { useState } from 'react';
import '../calculator/calculator.css';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleDigit = (value) => {
    setInput((prev) => prev + value);
  };

  const handleOperator = (operator) => {
    if (input === '') return;
    const lastChar = input[input.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      setInput((prev) => prev.slice(0, -1) + operator);
    } else {
      setInput((prev) => prev + operator);
    }
  };

  const handleEqual = () => {
    console.log(input);
    
    try {
      const evalResult = eval(input); 
      setResult(evalResult);
      setInput(String(evalResult));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const calculateDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => handleDigit(i)}>{i}</button>
      );
    }
    return digits;
  };

  return (
    <div className='main'>
      <div className='calculator_res'>
        {input || '0'}
      </div>
      <div className='calculator-container'>
        <div className='digits'>
          {calculateDigits()}
          <button onClick={() => handleDigit('.')}>.</button>
          <button onClick={() => handleDigit(0)}>0</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={handleClear}>C</button>
        </div>
        <div className='operators'>
          <button onClick={() => handleOperator('+')}>+</button>
          <button onClick={() => handleOperator('-')}>-</button>
          <button onClick={() => handleOperator('*')}>×</button>
          <button onClick={() => handleOperator('/')}>÷</button>
        </div>
      </div>
    </div>
  );
}
