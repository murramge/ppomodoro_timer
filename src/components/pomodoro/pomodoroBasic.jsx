import React, { useRef } from "react";

function PomodoroBasic(props) {
  const timerButton = (e) => {
    const { onTime } = props;
    e.preventDefault();
    console.log(e.target.value);
    const time = e.target.value;
    onTime(time);
  };

  return (
    <>
      <button value={1500} onClick={timerButton}>
        25
      </button>
      <button value={1800} onClick={timerButton}>
        30
      </button>
      <button value={600} onClick={timerButton}>
        10
      </button>
      <button value={2700} onClick={timerButton}>
        45
      </button>
    </>
  );
}

export default PomodoroBasic;
