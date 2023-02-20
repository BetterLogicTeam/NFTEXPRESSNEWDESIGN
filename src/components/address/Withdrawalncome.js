import React, { useEffect, useState } from "react";
import { API } from "../../API/Api";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";

const columns = [
  {
    dataField: "Number",
    text: "S.Number",
    sort: false,
  },
  {
    dataField: "UserId",
    text: "User Id",
    sort: false,
  },
  {
    dataField: "Rank",
    text: "Rank",
    sort: false,
  },

  {
    dataField: "Income",
    text: "Income",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date ",
    sort: false,
  },
];
const dataArray = [
  {
    Number: 213213,
    UserId: 222,
    Rank: "demo",
    Income: 233,
    DateTime: "12/12/2020",
  },
];

const Withdrawalncome = () => {

  const [dataArray, setdataArray] = useState([])


  const referral_API = async () => {
    try {

      const user = localStorage?.getItem("user");
      console.log("Uswerr", user);


      let responce = await API?.get(`/RewardIncome?id=${user}`)
      responce = responce.data.data;

      console.log("responce", responce);

      let arr = []
      responce.forEach((item, index) => {

        arr.push({
          Number: item.row,
          UserId: item?.uid,
          Income: item?.rincome,
          DateTime: item.dd,
          Rank: item.rname
        });
      })


      setdataArray(arr)

    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  }


  useEffect(() => {
    referral_API()
  }, [])


  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Reward Income</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default Withdrawalncome;
