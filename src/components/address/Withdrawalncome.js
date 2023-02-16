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
