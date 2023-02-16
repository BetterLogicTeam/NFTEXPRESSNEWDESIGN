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
    dataField: "UserId",
    text: "User Id",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date",
    sort: false,
  },
  {
    dataField: "WithdrawalAmount",
    text: "Withdrawal Amount",
    sort: false,
  },
  {
    dataField: "WithdrawalToken",
    text: "Withdrawal Token",
    sort: false,
  },
  {
    dataField: "TXN",
    text: "TXN",
    sort: false,
  },
];
const dataArray = [
  {
    Number: 213213,
    UserId: 222,
    DateTime: "12/12/2020",
    WithdrawalAmount: 121212,
    WithdrawalToken: 7812,
    TXN: 233,
  },
];

const LAGTokenHistory = () => {
  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>LAG Token History</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default LAGTokenHistory;
