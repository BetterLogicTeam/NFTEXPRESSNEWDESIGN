import React from "react";
// import SalesItems from "./SalesItems";
import { Image } from "react-bootstrap";
import unitedstates from "../../assets/images/unitedstateflag.png";
import GreatBritainflag from "../../assets/images/GreatBritainflag.png";
import brasilflag from "../../assets/images/brasilflag.png";

import canada from "../../assets/images/canada.jpg";

const dataArray = [
  {
    countryImg: brasilflag,
    countryName: "Brasil",
    sales: 562,
    value: "143,960",
    bounce: "32.14",
  },
  {
    countryImg: canada,
    countryName: "canada",
    sales: 782,
    value: "12,960",
    bounce: "4.14",
  },
  {
    countryImg: GreatBritainflag,
    countryName: "Great Britain",
    sales: 1.4,
    value: "190,700",
    bounce: "23.44",
  },
  {
    countryImg: brasilflag,
    countryName: "Brasil",
    sales: 562,
    value: "143,960",
    bounce: "32.14",
  },
  {
    countryImg: unitedstates,
    countryName: "United State",
    sales: 250,
    value: "230,900",
    bounce: "29.9",
  },
  {
    countryImg: canada,
    countryName: "canada",
    sales: 782,
    value: "12,960",
    bounce: "782",
  },
];

const AllSales = () => {
  return (
    <>
      <div className="mainflex">
        <div className="MatchingLevelMain firflex">
          {/* <div className="SalesMain"> */}
          {/* <SalesItems />
          <SalesItems /> */}
          {/* </div> */}
          {/* <div className="SalesMain"> */}
          {/* <SalesItems />
          <SalesItems /> */}
          {/* </div> */}

          <div className="SalesMain_table tableqa SalesMain_tableHeight">
            <h6>Sales by Country</h6>
            <table className="TableMain">
              <tr className="TableMainTitleNew">
                <th className="countryTit">Country</th>
                <th className="countryTit">Sales</th>
                <th className="countryTit">Value</th>
                <th className="countryTit">Percentage</th>
              </tr>
              {dataArray?.map((value, index) => (
               
                  <tr className="Table_item"  key={index}>
                    <td className="table_country">
                      <Image
                        src={value.countryImg}
                        art="image details"
                        fluid={true}
                      />

                      <td className="table_tit">
                   
                        <h6>{value.countryName}</h6>
                      </td>
                    </td>
                    <td className="table_sales">
                     
                      <h6>{value.sales}</h6>
                    </td>
                    <td className="table_value">
                      {/* <h6>Value:</h6> */}
                      <h6>${value.value}</h6>
                    </td>
                    <td className="table_bounce">
                      {/* <h6>Percentage:</h6> */}
                      <h6>${value.bounce}%</h6>
                    </td>
                  </tr>
               
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSales;
