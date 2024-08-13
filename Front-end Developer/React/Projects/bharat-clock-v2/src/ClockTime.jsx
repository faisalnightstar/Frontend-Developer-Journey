import { useState, useEffect } from "react";

function ClockTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="lead">
      This is current time: {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default ClockTime;
