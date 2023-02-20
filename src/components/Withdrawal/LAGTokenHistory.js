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
    dataField: "UserId",
    text: "User Id",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date",
    sort: false,
  },
  {
    dataField: "WithdrawalAmount",
    text: "Withdrawal Amount",
    sort: false,
  },
  {
    dataField: "WithdrawalToken",
    text: "Withdrawal Token",
    sort: false,
  },
  {
    dataField: "TXN",
    text: "TXN",
    sort: false,
  },
];

const LAGTokenHistory = () => {
  const [dataArray, setdataArray] = useState([]);

  const referral_API = async () => {
    try {
      const user = localStorage?.getItem("user");

      let responce = await API?.get(`/LagWithdrawalHistory?id=${user}`);
      responce = responce?.data?.data;

      console.log("Res", responce);
      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          Number: item.row,
          UserId: item.uid,
          WithdrawalToken: `${item?.tokenvalue} `,
          TXN: (
            <>
              <a
                href={`https://bscscan.com/tx/${item?.txn}`}
                target="_blank"
                className="text-white"
              >
                View Txn
              </a>
            </>
          ),

          DateTime: `${item?.rdate} `,
          WithdrawalAmount: item.Request_amount,
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
          <h6>LAG Token History</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default LAGTokenHistory;
