import React from "react";

const TotalEarningWidget = () => {
  return (
    <>
      <div className="EarningWidgetMain">
        <h6>Total Earning</h6>
        <div className="TotalEarnChatMain">
          <div className="priceChart">
            <span>$10</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
        </div>
        <div className="earningChartText">
          <div className="">
            <span>$2</span>
            <h5 className="Withdrawal">Total Withdrawal </h5>
          </div>
          <div className="">
            <span>$12</span>
            <h5 className="NetBalance">Net Balance</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalEarningWidget;
