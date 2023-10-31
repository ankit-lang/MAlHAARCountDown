import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import bgmalhaar from "../assets/bgMalhaarproper.jpg";

const Comingsoon = () => {
  const [date, setDate] = useState({
    days: "00",
    hours: "00",
    min: "00",
    sec: "00",
  });

  const interval = setInterval(() => {
    const futTime = new Date("2023-11-30T00:00:00").getTime();
    const diff = futTime - +new Date();
    let days, min, hour, sec;
    let differnce = diff;
    days = Math.floor(differnce / (1000 * 60 * 60 * 24)).toString();
    hour = Math.floor((differnce / (1000 * 60 * 60)) % 24).toString();
    min = Math.floor((differnce / (1000 * 60)) % 60).toString();
    sec = Math.floor((differnce / 1000) % 60).toString();

    setDate({
      days: days,
      hours: hour,
      min: min,
      sec: sec,
    });
    if (differnce < 0) {
      setDate({
        days: "00",
        hours: "00",
        min: "00",
        sec: "00",
      });
      clearInterval(interval);
    }
  }, 1000);


  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="malhaar-logo">
        <img src={bgmalhaar} alt="logo" />
      </div>
      {/* <div className="logo"><img src={logoMalhaar} alt="" /></div> */}
      <div className="box">
      <div className="countDown">
        <h4>MALHAAR STARTS IN</h4>

        <div className="timer">
          <div className="days">
            <p>{date.days} </p>
            <p className="timerText">DAYS</p>
          </div>
          <div className="hours">
            <p>{date.hours} </p>
            <p className="timerText"> HOURS</p>
          </div>
          <div className="min">
            <p>{date.min} </p>
            <p className="timerText">MIN</p>
          </div>
          <div className="sec">
            <p>{date.sec} </p>
            <p className="timerText">SEC</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Comingsoon;
