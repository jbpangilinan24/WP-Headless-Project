// useContext to import data from other component

import React, {useContext} from "react";

import { TimeContext } from "./DigitalClock.jsx";

function DigitalClockB() {
  const time = useContext(TimeContext);

  return(
    <>
      <div className="digitalClock text-center">
        <span>{time}</span>
      </div>
    </>
  );
}

export default DigitalClockB;