import DateTimeDisplay from './DateTimeDisplay';
import React from 'react';
import { useCountdown } from '../../../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex">
      <DateTimeDisplay value={days} isDanger={hours <= 2} />
      <p className={hours <= 2 ? 'countdown danger' : 'countdown text-green-600'}>:</p>
      <DateTimeDisplay value={hours} isDanger={hours <= 2} />
      <p className={hours <= 2 ? 'countdown danger' : 'countdown text-green-600'}>:</p>
      <DateTimeDisplay value={minutes} isDanger={hours <= 2} />
      <p className={hours <= 2 ? 'countdown danger' : 'countdown text-green-600'}>:</p>
      <DateTimeDisplay value={seconds} isDanger={hours <= 2} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
