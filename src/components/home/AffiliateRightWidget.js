import React, { useRef } from "react";
import toast from "react-hot-toast";

const AffiliateRightWidget = () => {
  const CopyAddressRef = useRef(null);
  const CopyAddressHandler = () => {
    const text = CopyAddressRef.current.value;
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  return (
    <>
      <div className="AffiliateMain">
        <h6>Affiliate Link Right</h6>
        <div className="CopyText">
          <input
            type="text"
            value="https://demos.creative-ti"
            readOnly
            ref={CopyAddressRef}
          />
          <button onClick={CopyAddressHandler}>Copy</button>
        </div>
      </div>
    </>
  );
};

export default AffiliateRightWidget;
