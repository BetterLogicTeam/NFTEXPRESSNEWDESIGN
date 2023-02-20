import React, { useEffect, useState } from "react";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";
import Form from "react-bootstrap/Form";
import { API } from "../../API/Api";

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


const LevelDetails = () => {

  const [dataArray, setdataArray] = useState([])
  const [positionfilter, setpositionfilter] = useState("0")
  const [StatusFilter, setStatusFilter] = useState("2")
  const [LevelFilter, setLevelFilter] = useState("0")
  const referral_API = async () => {
    try {
      const user = localStorage?.getItem("user");

      let responce = await API.post('/level_details', {
        "uid": 778899,
        "level": LevelFilter,
        "position": positionfilter,
        "status": StatusFilter
      })
      responce = responce?.data?.data;

      let arr = []
      responce.forEach((item, index) => {
        arr.push({
          Number: item.row,
          UserId: `${item?.user_id} `,
          Level: item.Leveltype,
          Package: `$ ${item?.pp}  `,
          DateTime: `${item?.ee} `,
          Status: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
          ActivationDate: item.top_update || "Null",
          reg_date: item.date1 || "Null",
          Position: item.position
        })

        setdataArray(arr)

      })



    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  }


  useEffect(() => {
    referral_API()
  }, [])
  useEffect(() => {
    referral_API()
  }, [LevelFilter, positionfilter, StatusFilter])

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Level Details</h6>
        </div>
        <div className="LevelDetailsSelect">
          <div className="LevelDetailsInputs">
            <span>Select Level</span>
            <Form.Select aria-label="Default select example" onChange={(e) => setLevelFilter(e.target.value)}>
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
            <Form.Select aria-label="Default select example" onChange={(e) => setStatusFilter(e.target.value)}>
              <option>Select Status</option>
              <option value="0">All</option>
              <option value="1">Active</option>
              <option value="2">In-Active</option>
            </Form.Select>
          </div>
          <div className="LevelDetailsInputs">
            <span>Position</span>
            <Form.Select aria-label="Default select example" onChange={(e) => setpositionfilter(e.target.value)}>
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
