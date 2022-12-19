import React from "react";
import { useEffect, useRef, useState } from "react";

function padNumber(num, length) {
  return String(num).padStart(length, "0");
}

function PomodoroFocus(props) {
  //초기 설정은 일단 0으로
  const hourinit = 0;
  const mininit = 0;
  const secinit = 0;

  const [timer, setTimer] = useState();

  const time = parseInt(timer);

  [time].every(() => {
    return time;
  });

  console.log(time);

  //지정할 시간 선택
  let initialTime = useRef(time);
  // interval을 중지하고 0으로 초기화하고 싶을 때
  const interval = useRef(null);

  console.log(initialTime);

  const [hour, setHour] = useState(padNumber(hourinit, 2));
  const [min, setMin] = useState(padNumber(mininit, 2));
  const [sec, setSec] = useState(padNumber(secinit, 2));

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

  const twofive = () => {
    setTimer(1500);
  };
  return (
    <div>
      {hour} : {min} : {sec}
      <button onClick={twofive}>25</button>
    </div>
  );
}

export default PomodoroFocus;
