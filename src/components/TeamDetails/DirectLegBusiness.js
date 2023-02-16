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
    dataField: "SelfInvestment",
    text: "Self Investment",
    sort: false,
  },

  {
    dataField: "TeamBusiness",
    text: "Team Business",
    sort: false,
  },
  {
    dataField: "TotalBusiness",
    text: "Total Business",
    sort: false,
  },
];
const dataArray = [
  {
    Number: 213213,
    UserId: 222,
    SelfInvestment: "demo",
    TeamBusiness: 233,
    TotalBusiness: "15",
  },
];

const DirectLegBusiness = () => {
  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Direct Leg Business</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default DirectLegBusiness;
