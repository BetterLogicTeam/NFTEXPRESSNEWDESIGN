import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Image } from "react-bootstrap";
import copyWhite from "../../assets/images/copyWhite.png";
import { useSelector } from "react-redux";

const AffiliateLeftWidget = () => {
  const user = useSelector((state) => state.UserAuth.userId);

  const LeftCopyAddressRef = useRef(null);
  const RightCopyAddressRef = useRef(null);

  // const RightCopyAddressRef = useRef(null);
  const LeftCopyAddressHandler = () => {
    const text = `https://nftxpress.club/Register_main?referrallink=${user}&position=Left`
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const RightCopyAddressHandler = () => {
    const text = `https://nftxpress.club/Register_main?referrallink=${user}&position=Right`

    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  const linkurl = async (req, res, next, value) => {
    // alert(value)
    window.open(`https://nftxpress.club/Register_main?referrallink=${user}&position=${'left'}`)
    // window.open(`https://nftxpress.club/Register_main?referrallink=${user}&position=Left`)

    next();
  };

  return (
    <>
      <div className="AffiliateMain">
        <h6 style={{ fontSize: '20px' }}>Affiliate Link </h6>

        <div className="CopyText">

          <div className="flexbutton">
            <button onClick={() => linkurl('left')} className="myreferal-link">  Left Referral Link
            </button>
            <button onClick={LeftCopyAddressHandler} className="icon-copy" style={{ width: '50px', marginLeft: "0px", background: "#130047" }}>  <Image src={copyWhite} alt="Image description" fluid={true} /></button>
          </div>






          <div className="flexbutton">
            <button onClick={() => { linkurl('right') }} className="myreferal-link" >  Right Referral Link
            </button>
            <button onClick={RightCopyAddressHandler} className="iconcopy" style={{ width: '50px', marginLeft: "0px", background: "#130047" }}>  <Image src={copyWhite} alt="Image description" fluid={true} /></button>
          </div>



        </div>
      </div>
    </>
  );
};

export default AffiliateLeftWidget;
