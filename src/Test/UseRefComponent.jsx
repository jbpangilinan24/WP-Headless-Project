import React, {useState, useEffect, useRef} from 'react';

function UseEffectComponent() {
  const ref = useRef(0);

  useEffect(() => {
    console.log("COmponent Rendered");
  });

  function handleClick() {
    ref.current++;
  }

  return(
    <>
      <button onClick={handleClick()}>Click Me!</button>
    </>
  );
}

export default UseEffectComponent;