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
    dataField: "Level",
    text: "Level",
    sort: false,
  },

  {
    dataField: "DateTime",
    text: "Date",
    sort: false,
  },
  {
    dataField: "ActivationDate",
    text: "Activation Date ",
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
    dataField: "Package",
    text: "Package",
    sort: false,
  },
];
const dataArray = [
  {
    Number: 213213,
    UserId: 222,
    Level: "Level 1",
    DateTime: "12/3/2022",
    ActivationDate: "12/3/2022",
    Status: "all",
    Position: "Left",
    Package: "demo",
  },
];

const LevelDetails = () => {
  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Level Details</h6>
        </div>
        <div className="LevelDetailsSelect">
          <div className="LevelDetailsInputs">
            <span>Select Level</span>
            <Form.Select aria-label="Default select example">
              <option>Select Level</option>
              <option value="0">All Level</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
              <option value="4">Level 4</option>
              <option value="5">Level 5</option>
              <option value="6">Level 6</option>
              <option value="7">Level 7</option>
              <option value="8">Level 8</option>
            </Form.Select>
          </div>
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
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default LevelDetails;
