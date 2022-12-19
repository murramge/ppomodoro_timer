import React, { useState } from "react";
import PomodoroFocus from "./pomodoroFocus.jsx";
function Pomodoro(props) {
  const [timer, setTimer] = useState();

  [timer].every(() => {
    return timer;
  });

  const ontime = (data) => {
    [data].every(() => {
      return data;
    });
  };
  return <PomodoroFocus ontime={ontime} />;
}

export default Pomodoro;
