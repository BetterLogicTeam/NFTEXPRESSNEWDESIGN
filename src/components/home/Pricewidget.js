import React from "react";

const Pricewidget = () => {
  return (
    <>
      <div className="PricewidgetMain">
        <div className="Pricewidget_text">
          <h6>My NFT Packages</h6>
          {/* <h5>Package charges</h5> */}
        </div>
        <div className="Pricewidget_img">
          <div className="priceChart">
            <span>$10</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricewidget;
