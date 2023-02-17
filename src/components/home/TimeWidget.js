import React from "react";
import Countdown from "react-countdown";
import RunningClock from "./RunningClock";

const TimeWidget = ({ timetoearn, timetoqualify }) => {
  console.log('timetoearn', timetoearn)
  console.log('timetoqualify', timetoqualify)
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div style={{ color: "#fff" }}>completed!</div>;
    } else {
      // Render a countdown
      return (
        <div>
          <span>
            {days} <p className="itec">Day</p>
          </span>
          :
          <span>
            {hours} <p className="itec xs">Hour</p>{" "}
          </span>
          :
          <span>
            {minutes} <p className="itec">Min</p>
          </span>
          :
          <span>
            {seconds} <p className="itec ">Sec</p>{" "}
          </span>
        </div>
      );
    }
  };



  // const date = new Date();
  // date.setHours(date.getHours() + 22);
  // date.setDate(date.getDate() + 10);

  return (
    <>
      <div className="TimeWidgetMain">
        <h6>Quick Starter Bonus</h6>
        <div className="TimeWidgetFlex">
          <div className="TimeWidgetLeft">
            <h6>Time to Qualify</h6>
            <RunningClock />
            <div className="showTimer">
              <Countdown format="D:H:M:S"
                date={
                  Date.now() +
                  (String(1676618567 * 1000) - Date.now())
                }
                renderer={renderer} />
            </div>
          </div>
          <div className="TimeWidgetRight">
            <h6>Time to Qualify</h6>
            <RunningClock />
            <div className="showTimer">
              <Countdown date={
                Date.now() +
                (String(1676618567 * 1000) - Date.now())
              } renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeWidget;
