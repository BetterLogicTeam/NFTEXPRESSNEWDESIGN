import React, { useRef } from "react";
import { Image, Form } from "react-bootstrap";
import allincome from "../../assets/images/allincome.png";
import ShareTable from "../sharecomponent/ShareTable";
import BgLayout from "../sharecomponent/BgLayout";
import tableimg from "../../assets/images/tableimg.png";

const dataArray = [
  {
    image: tableimg,
    UserID: 121212,
    FromID: 1212221212,
    Level: "high",
    Amount: 53663,
    Income: 55,
    Time: "121",
  },
  {
    image: tableimg,
    UserID: 121212,
    FromID: 1212221212,
    Level: "high",
    Amount: 53663,
    Income: 55,
    Time: "121",
  },
  {
    image: tableimg,
    UserID: 121212,
    FromID: 1212221212,
    Level: "high",
    Amount: 53663,
    Income: 55,
    Time: "121",
  },
  {
    image: tableimg,
    UserID: 1212,
    FromID: 221212,
    Level: "high",
    Amount: 53663,
    Income: 8798979,
    Time: "12187989",
  },
];

const columns = [
  {
    dataField: "image",
    text: "S. Number",
    sort: false,
    formatter: (cell, row) => (
      <img
        alt={row.name}
        style={{ width: "20px", height: "20px" }}
        src={row.image}
      />
    ),
  },
  {
    dataField: "UserID",
    text: "User ID",
    sort: false,
  },
  {
    dataField: "FromID",
    text: "From ID",
  },
  {
    dataField: "Level",
    text: "Level",
  },
  {
    dataField: "Amount",
    text: "On Amount",
  },
  {
    dataField: "Income",
    text: "Income",
  },
  {
    dataField: "Time",
    text: "Date ",
  },
];

const MatchingLevelIncome = () => {
  const FromDateref = useRef();
  const ToDateref = useRef();
  return (
    <>
      <BgLayout>
        <div className="MatchingLevelMain">
          <div className="Matching_Header">
            <div className="Matching_Tit">
              <Image src={allincome} alt="Image description" fluid={true} />
              <span>Matching Level Income</span>
            </div>
            <div className="Matching_Inputs">
              <Form.Select aria-label="Default select example">
                <option>Select Level</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <input
                type="text"
                placeholder="From Date"
                ref={FromDateref}
                onChange={(e) => console.log(e.target.value)}
                onFocus={() => (FromDateref.current.type = "date")}
                onBlur={() => (FromDateref.current.type = "text")}
              />
              <input
                type="text"
                placeholder="To Date"
                ref={ToDateref}
                onChange={(e) => console.log(e.target.value)}
                onFocus={() => (ToDateref.current.type = "date")}
                onBlur={() => (ToDateref.current.type = "text")}
              />
              <button>Search</button>
            </div>
          </div>
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default MatchingLevelIncome;
