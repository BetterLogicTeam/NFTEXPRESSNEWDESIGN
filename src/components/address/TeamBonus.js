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
    dataField: "MatchingBusiness",
    text: "Matching Business",
    sort: false,
  },

  {
    dataField: "NetIncome",
    text: "$ Net Income",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date",
    sort: false,
  },
];
const dataArray = [
  {
    Number: 213213,
    UserId: 222,
    MatchingBusiness: "demo",
    NetIncome: 233,
    DateTime: "12/12/2020",
  },
];

const TeamBonus = () => {
  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Quick Starter Bonus</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default TeamBonus;
