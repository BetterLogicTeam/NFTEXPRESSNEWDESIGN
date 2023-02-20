import moment from "moment/moment";
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
    dataField: "PackageAmount",
    text: "Package Amount",
    sort: false,
  },
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


const MintingHistory = () => {

  const [dataArray, setdataArray] = useState([])


  const referral_API = async () => {
    try {

      const user = localStorage?.getItem("user");
      console.log("Uswerr", user);
      // let ress = JSON.parse(user);
      // let uId = ress?.uid;

      let responce = await API?.get(`buynfttoken_history?id=${user}`)
      responce = responce.data.data;
      console.log("responceresponce", responce);

      let arr = []
      responce.forEach((item, index) => {
        arr.push({
          Number: index + 1,
          PackageAmount: item?.planamount,
          Txn: <><a href={`https://bscscan.com/tx/${item?.traxn}`} target="_blank" className='text-white'>View Txn</a></>,
          DateTime: moment(item?.edate).format("DD/MM/YYYY h:m:s A"),
        });

      }
      )
      console.log("responce", arr);


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
          <h6>Minting History</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default MintingHistory;
