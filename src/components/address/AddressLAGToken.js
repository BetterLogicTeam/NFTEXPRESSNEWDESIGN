import React, { useEffect, useState } from "react";
import { API } from "../../API/Api";
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


  const [dataArray, setdataArray] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [listPerpage, setlistPerpage] = useState(10)

  const referral_API = async () => {
    try {

      const user = localStorage?.getItem("user");
      // let ress = JSON?.parse(user);
      // let uId = ress?.uid;

      let responce = await API?.get(`/ROIIncome?id=${user}`)
      responce = responce?.data?.data;

      console.log("Res", responce);
      let arr = []
      responce.forEach((item, index) => {

        arr.push({
          Number: index + 1,
          Id: `${item?.uid} `,
          Package: `$ ${item?.packageamount} `,
          DateTime: `${item.dd}`,
          ReceivedLAGToken: item.amounttoken,
          TotalLAGToken: `${item?.token}`

        });


      })
      setdataArray(arr)


    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  }
  useEffect(() => {
    referral_API()
  }, [])

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
