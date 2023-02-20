import React, { useEffect, useState } from "react";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";

const LAGAirdropHistory = () => {
  const [dataArray, setdataArray] = useState([]);

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

  const referral_API = async () => {
    try {
      const user = localStorage?.getItem("user");

      let responce = await API?.get(`lagStakingHistory?uid=${778899}`);
      responce = responce.data.data;

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          Number: item?.row,
          PackageAmount: item?.packageamount,
          DateTime: item?.dd,
        });
      });

      setdataArray(arr);
    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  };

  useEffect(() => {
    referral_API();
  }, []);
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
