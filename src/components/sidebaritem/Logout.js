import React from "react";
import Passwordicon from "../../assets/images/Passwordicon.png";
// import sidebarbootom from "../../assets/images/sidebarmainimage";

import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const history = useNavigate()
  const LogoutHandler = (e) => {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("user", null);
    history("/Login_main");
    window.location.reload();
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
