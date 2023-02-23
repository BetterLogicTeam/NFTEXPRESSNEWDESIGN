import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import { API } from "../../API/Api";

const AllIncomeChat = () => {

  const [chartText, setChartText] = useState();


  // const [userDetail, setUserDetail] = useState({})
  const userDetail = useSelector((state) => state.nft.userDetail);


  // const DashboardAPI = async () => {

  //   try {
  //     const userDetail = useSelector((state) => state.nft.userDetail);
  //     console.log("userDetail", userDetail);

  //     // let res = await API.get(`/getDashboardValues?id=${user}`)
  //     // let res = await API.get(`/getDashboardValues?id=778899`)

  //     res = res.data.data[0]
  //     setUserDetail(res)





  //   } catch (e) {
  //     console.log("Error While Fatch Dashboard API", e);
  //   }
  // }
  // useEffect(() => {



  //   DashboardAPI()




  // }, []);





  const data = [
    ["Task", "Hours per Day"],
    ["Staking reward", 10],
    ["ROI Income", 10],


    ["Matching Bonus", userDetail.levelincome / 100],
    ["Team Bonus", userDetail.binary / 100],
    ["Starter-Bonus", userDetail.TeamBonus / 100],
    ["Referral Bonus ", userDetail.directIncome / 100],
    ["Reward Income", 8]

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

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--text-size');
    setChartText(color)
  }, [])
  return (
    <>
      <div className="AllIncomeChatMain">
        <h6>All Income</h6>
        <div className="AllIncomeChat">
          <Chart className="chart-pie newStyle"
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"530px"}
          />
        </div>
      </div>
    </>
  );
};

export default AllIncomeChat;
