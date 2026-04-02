import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // time in milliseconds
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 100); // increment by 100ms
    }, 100);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  // 🔥 Format time → MM:SS:MS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000)/100 );

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      ":" +
      String(milliseconds).padStart(2,"0")
    );
  };

  return (
    <div style={styles.container}>
      <h2>⏱️ Stopwatch (100ms)</h2>

      <h1 style={styles.time}>{formatTime(time)}</h1>

      <div style={styles.buttons}>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "sans-serif",
  },
  time: {
    fontSize: "40px",
    margin: "20px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};