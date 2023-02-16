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
    dataField: "Id",
    text: "Id",
    sort: false,
  },
  {
    dataField: "Package",
    text: "Package",
    sort: false,
  },
  {
    dataField: "TotalLAGToken",
    text: "Total LAG Token",
    sort: false,
  },

  {
    dataField: "ReceivedLAGToken",
    text: "Received LAG Token",
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
    Id: 222,
    Package: "heigh",
    TotalLAGToken: 4556,
    ReceivedLAGToken: 212433,
    DateTime: "12/12/2020",
  },
];

const AddressLAGToken = () => {
  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>LAG Token</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default AddressLAGToken;
