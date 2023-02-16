import React from "react";
import { Image } from "react-bootstrap";
import nftuser from "../../assets/images/nftuser.jpeg";

const LatestNews = () => {
  return (
    <>
      <div className="MatchingLevelMain latestnewsmain">
        {/* <div className="SalesMain"> */}
        {/* <SalesItems />
          <SalesItems /> */}
        {/* </div> */}
        {/* <div className="SalesMain"> */}
        {/* <SalesItems />
          <SalesItems /> */}
        {/* </div> */}
        <div className="SalesMain_table LatestNewsMain">
          <h6>Latest News</h6>
          <div className="LatestNewsDetails">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              pariatur ea. Numquam, commodi voluptate. Perferendis omnis numquam
              earum quod vitae veritatis, sit, voluptate quo reiciendis in
              fugiat! Fuga, id animi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vitae, pariatur ea. Numquam, commodi voluptate.
              Perferendis omnis numquam earum quod vitae veritatis, sit,
              voluptate quo reiciendis in fugiat! Fuga, id animi? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vitae, pariatur ea.
              Numquam, commodi voluptate. Perferendis omnis numquam earum quod
              vitae veritatis, sit, voluptate quo reiciendis in fugiat! Fuga, id
              animi?
            </p>
          </div>
        </div>
        <div className="SalesMain_table LatestNewsImage">
          <div className="NewsImagescroll">
            <Image src={nftuser} art="image details" fluid={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
