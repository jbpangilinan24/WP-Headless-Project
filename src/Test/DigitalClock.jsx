import React, {useEffect, useState, createContext} from "react";
import DigitalClockB from "./DigitalClockB";
export const TimeContext = createContext();

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
        setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return(
    <>
      <div className="digitalClock text-center">
        <span>{formatTime()}</span>
        <TimeContext.Provider value={formatTime()}>
          <DigitalClockB time={formatTime()}/>
        </TimeContext.Provider>
      </div>
    </>
  );
}

export default DigitalClock;