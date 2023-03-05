import { useEffect, useState } from 'react';

import './Time.css';


interface TimeI {
  time: number,
}

export const Time = ({ time }: TimeI) => {
  const [units, setUnits] = useState('0');
  const [tens, setTens] = useState('0');
  const [hundreds, setHundreds] = useState('0');

  useEffect(() => {
    let timeStr = String(time);

    setUnits(timeStr[timeStr.length - 1]);
    setHundreds(timeStr.length === 3 ? timeStr[timeStr.length - 3] : '0');
    setTens(timeStr.length > 1 ? timeStr[timeStr.length - 2] : '0');
  }, [time])

  return (
    <div className="timer">
      <div className={`number-${hundreds}`}></div>
      <div className={`number-${tens}`}></div>
      <div className={`number-${units}`}></div>
    </div>
  )
};
