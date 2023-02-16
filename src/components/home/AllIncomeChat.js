import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const AllIncomeChat = () => {

  const [chartText, setChartText] = useState();

  const data = [
    ["Task", "Hours per Day"],
    ["Staking reward", 10],
    ["Matching Bonus", 10],
    ["Team Bonus", 10],
    ["Starter-Bonus", 10],
    ["Referral Bonus ", 10],
    ["Rank Reward", 8]

  ];
  const options = {
    chartArea: {
      width: "100%",
      // height: "70%",
    },
   fontName: "'sans-serif'",
    pieSliceText: "label",
   fontSize: chartText,
    backgroundColor: "transparent",
    legend: "none",
    pieSliceBorderColor: "transparent",
    pieStartAngle: 100,
    // bold: true,
    colors: [
      "#A03B7C",
      "#9A38A3",
      "#D3452F",
      "#2BECA7",
      "#ECB62B",
      "#4C7F98",
      "#4638A3",
    ],
  
  };

  useEffect(()=>{
    const color = getComputedStyle(document.documentElement).getPropertyValue('--text-size');
    setChartText(color)
  },[])
  return (
    <>
      <div className="AllIncomeChatMain">
        <h6>All Income</h6>
        <div className="AllIncomeChat">
          <Chart className="chart-pie newStyle"
            chartType="PieChart"
            data={data}
            options= {options}
            width={"100%"}
            height={"530px"}
          />
        </div>
      </div>
    </>
  );
};

export default AllIncomeChat;
