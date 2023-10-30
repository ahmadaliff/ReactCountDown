import { useEffect, useState } from "react";
import Card from "../../Component/Card";
import { useLocation } from "react-router-dom";

const Countdown = ({ style }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const countDownDate = new Date(
    query.get("date") ? query.get("date") : "2024-07-17:00:00"
  );
  const [countdown, setCountdown] = useState(
    countDownDate - new Date().getTime() < 0
      ? 0
      : countDownDate - new Date().getTime()
  );
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDownDate - new Date().getTime() <= 0) {
        return () => clearInterval(interval);
      } else {
        setCountdown(countDownDate - new Date().getTime());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  useEffect(() => {
    countdown <= 0 ? setStatus(true) : setStatus(false);
    setDays(Math.floor(countdown / (1000 * 60 * 60 * 24)));
    setHours(
      Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    setMinutes(Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((countdown % (1000 * 60)) / 1000));
  }, [countdown]);

  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className={style.countdown}>
      {status ? <h2>WE ARE HERE</h2> : <h2>WE'RE LAUNCHING SOON</h2>}

      <div className={style.cardsWrapper}>
        <Card style={style} number={days} text={"days"} />
        <Card style={style} number={hours} text={"hours"} />
        <Card style={style} number={minutes} text={"Minutes"} />
        <Card style={style} number={seconds} text={"Seconds"} />
      </div>
    </div>
  );
};

export default Countdown;
