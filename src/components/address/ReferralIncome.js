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
    dataField: "FromID",
    text: "From ID",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date",
    sort: false,
  },

  {
    dataField: "Package",
    text: "Package",
    sort: false,
  },
  {
    dataField: "Income",
    text: "Income",
    sort: false,
  },
];
const dataArray = [
  {
    Number: 213213,
    UserId: 222,
    FromID: 121212,
    DateTime: "12/12/2020",
    Package: "high",
    Income: 233,
  },
];

const ReferralIncome = () => {

  const [dataArray, setdataArray] = useState([])


  const referral_API = async () => {
    try {

      const user = localStorage?.getItem("user");

      let responce = await API?.post("/DirectIncome", {
        "uid": user
      })
      responce = responce?.data?.data?.recordset;
      let arr = []
      responce.forEach(item => {
        arr.push(
          {
            Number: item.RowNumber,
            UserId: item.user_id,
            FromID: item.from_id,
            DateTime: item.dd,
            Package: item.amount,
            Income: item.income,
          },
        )
      });
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
          <h6>Referral Income</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default ReferralIncome;
