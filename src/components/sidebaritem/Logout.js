import React from "react";
import Passwordicon from "../../assets/images/Passwordicon.png";
// import sidebarbootom from "../../assets/images/sidebarmainimage";

import { Image } from "react-bootstrap";
const Logout = () => {
  const LogoutHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="logoutIcon" onClick={LogoutHandler}>
        <Image src={Passwordicon} alt="Image description" fluid={true} />
        Logout
      </div>
      {/* <Image src={sidebarbootom} alt="Image description" fluid={true} /> */}

    </>
  );
};

export default Logout;
