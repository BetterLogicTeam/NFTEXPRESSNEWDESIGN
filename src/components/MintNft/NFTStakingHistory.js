import React from "react";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";

const NFTStakingHistory = () => {
  // eslint-disable-next-line no-sparse-arrays
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
      dataField: "TokenID",
      text: "Token ID",
      sort: false,
    },
    ,
    {
      dataField: "Txn",
      text: "Txn",
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
      TokenID: 458,
      Txn: "test",
      DateTime: "12/3/2022",
    },
  ];

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>NFT Staking History</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default NFTStakingHistory;
