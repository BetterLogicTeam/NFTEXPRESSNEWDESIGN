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
