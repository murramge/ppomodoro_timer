import React from "react";
import { useEffect, useRef, useState } from "react";

function padNumber(num, length) {
  return String(num).padStart(length, "0");
}

function PomodoroFocus(props) {
  const { onTime } = props;

  console.log(onTime);
  const temphour = padNumber(0, 2);
  const tempmin = padNumber(0, 2);
  const tempsec = padNumber(0, 2);
  //초기 설정은 일단 0으로
  const temptime = onTime ? parseInt(onTime) : 0;

  console.log(temptime);
  //지정할 시간 선택
  let initialTime = useRef(temptime);
  // interval을 중지하고 0으로 초기화하고 싶을 때
  const interval = useRef(null);

  console.log(initialTime);

  const [hour, setHour] = useState(padNumber(temphour, 2));
  const [min, setMin] = useState(padNumber(tempmin, 2));
  const [sec, setSec] = useState(padNumber(tempsec, 2));

  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60, 2));
      setMin(padNumber(parseInt((initialTime.current / 60) % 60), 2));
      setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  return (
    <div>
      {hour} : {min} : {sec}
    </div>
  );
}

export default PomodoroFocus;
