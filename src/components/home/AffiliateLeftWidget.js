import React from "react";
import toast from "react-hot-toast";
import { Image } from "react-bootstrap";
import copyWhite from "../../assets/images/copyWhite.png";

const AffiliateLeftWidget = () => {
  // const LeftCopyAddressRef = useRef(null);
  // const RightCopyAddressRef = useRef(null);
  const LeftCopyAddressHandler = () => {
    // const text = LeftCopyAddressRef.current.value;
    // navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const RightCopyAddressHandler = () => {
    // const text = RightCopyAddressRef.current.value;
    // navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  const linkurl = (req, res, next) => {

    window.open("https://nft-xpress-dashboard.pages.dev/","_self")
    next();
  };
  
  return (
    <>
      <div className="AffiliateMain">
        <h6>Affiliate Link </h6>

        <div className="CopyText">
       
       <div className="flexbutton">
          <button  onClick={linkurl} className="myreferal-link">  Left Referral Link 
            </button>
            <button  onClick={LeftCopyAddressHandler} className="icon-copy"  style={{width:'50px',marginLeft:"0px" , background:"#130047"}}>  <Image   src={copyWhite} alt="Image description" fluid={true} /></button>
            </div>
         
         




            <div className="flexbutton">
          <button onClick={linkurl}  className="myreferal-link" >  Left Referral Link 
            </button>
            <button  onClick={LeftCopyAddressHandler} className="iconcopy" style={{width:'50px',marginLeft:"0px"  , background:"#130047"}}>  <Image  src={copyWhite} alt="Image description" fluid={true} /></button>
            </div>
     


        </div>
      </div>
    </>
  );
};

export default AffiliateLeftWidget;
