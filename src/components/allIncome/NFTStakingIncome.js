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
    dataField: "Income",
    text: "Income",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date & Time",
    sort: false,
  },
];

const NFTStakingIncome = () => {

  const [dataArray, setdataArray] = useState([])


  const referral_API = async () => {
    try {

      const user = localStorage?.getItem("user");
      console.log("Uswerr", user);


      let responce = await API?.get(`nftIncomeList?uid=${778899}`)
      responce = responce.data.data;
      console.log("responce", responce);

      let arr = []
      responce.forEach((item, index) => {

        arr.push({
          Number: item?.row,
          Income: item?.plan_amount,

          DateTime: item?.dd
        });
      }
      )


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
          <h6>NFT Staking Income</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default NFTStakingIncome;
