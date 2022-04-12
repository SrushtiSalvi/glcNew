import DateTimeDisplay from './DateTimeDisplay'
import React from 'react'
import { useCountdown } from '../../../hooks/useCountdown'

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
    </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex">
      <DateTimeDisplay value={days} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} isDanger={false} />
    </div>
  )
}

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    )
  }
}

export default CountdownTimer
