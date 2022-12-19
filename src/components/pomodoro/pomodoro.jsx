import React, { useState } from "react";
import PomodoroFocus from "./pomodoroFocus.jsx";
import PomodoroBasic from "./pomodoroBasic.jsx";
function Pomodoro(props) {
  const [selecttime, setselecttime] = useState();

  const onTime = (time) => {
    setselecttime(time);
  };

  const time = parseInt(selecttime);

  const hasInput = [time].every((item) => item);

  return (
    <>
      <PomodoroBasic onTime={onTime} />
      <> {hasInput && <PomodoroFocus onTime={time}></PomodoroFocus>} </>
    </>
  );
}

export default Pomodoro;
