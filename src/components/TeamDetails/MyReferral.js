import React from "react";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";
import Form from "react-bootstrap/Form";

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
    dataField: "Country",
    text: "Country",
    sort: false,
  },

  {
    dataField: "Package",
    text: "Package",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date",
    sort: false,
  },
  {
    dataField: "Status",
    text: "Status",
    sort: false,
  },
  {
    dataField: "Position",
    text: "Position",
    sort: false,
  },
  {
    dataField: "ActivationDate",
    text: "Activation Date ",
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
    Country: "US",
    Package: "demo",
    DateTime: "12/3/2022",
    Status: "all",
    Position: "Left",
    ActivationDate: "12/3/2022",
    TotalBusiness: "10",
  },
];

const MyReferral = () => {
  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>My Referral</h6>
        </div>
        <div className="LevelDetailsSelect">
          <div className="LevelDetailsInputs">
            <span>Select Status</span>
            <Form.Select aria-label="Default select example">
              <option>Select Status</option>
              <option value="0">All</option>
              <option value="1">Active</option>
              <option value="2">In-Active</option>
            </Form.Select>
          </div>
          <div className="LevelDetailsInputs">
            <span>Position</span>
            <Form.Select aria-label="Default select example">
              <option>Select Position</option>
              <option value="0">All </option>
              <option value="1">Left</option>
              <option value="2">Right</option>
            </Form.Select>
          </div>
          <div className="LevelDetailsInputs">
            <span>From Date</span>
            <input type="date" />
          </div>
          <div className="LevelDetailsInputs">
            <span>To Date</span>
            <input type="date" />
          </div>
          <div className="">
            <button>Search</button>
          </div>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default MyReferral;
