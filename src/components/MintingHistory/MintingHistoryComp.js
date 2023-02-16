import React from "react";
import MintingHeader from "./MintingHeader";
import MintMainImage from "./MintMainImage";

const MintingHistoryComp = () => {
  return (
    <>
      <div className="MintingHistory_Main pb-4">
        <MintingHeader />
      </div>
      <div className="MintingHistory_Main Mobile_MintingHistory_Main">
        <MintMainImage />
      </div>
    </>
  );
};

export default MintingHistoryComp;
