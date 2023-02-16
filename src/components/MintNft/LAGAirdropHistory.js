import React from "react";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";

const LAGAirdropHistory = () => {
  const columns = [
    {
      dataField: "Number",
      text: "S.Number",
      sort: false,
    },
    {
      dataField: "PackageAmount",
      text: "Package Amount",
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
      PackageAmount: 222,
      DateTime: "12/3/2022",
    },
  ];

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>LAG Airdrop Token History</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default LAGAirdropHistory;
