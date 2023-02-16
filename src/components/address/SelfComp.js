import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import BgLayout from "../sharecomponent/BgLayout";
import copytext from "../../assets/images/copytext.png";
import toast from "react-hot-toast";

const SelfComp = () => {
  const CopyAddressRef = useRef(null);

  const CopyAddressHandler = () => {
    const text = CopyAddressRef.current.innerText;
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Self Address</h6>
        </div>
        <div className="CopyAddressMain">
          <span>Self Address:</span>
          <span className="addressText" ref={CopyAddressRef}>
            0x84bF8BcDE152B33bbA6852E488d0C884898F17Dc
          </span>
          <Image
            src={copytext}
            alt="Image description"
            fluid={true}
            onClick={CopyAddressHandler}
          />
        </div>
      </BgLayout>
    </>
  );
};

export default SelfComp;
