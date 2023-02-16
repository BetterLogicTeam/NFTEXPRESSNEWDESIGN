import React from "react";
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
const dataArray = [
  {
    Number: 213213,
    Income: 121212,
    DateTime: "12/12/2020",
  },
];

const NFTStakingIncome = () => {
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
