import React from "react";
import { Image } from "react-bootstrap";
import Path from "../../assets/images/profile.png";
import borderImage from "../../assets/images/borderImage.png";

const Profile = () => {
  const user = localStorage.getItem("user");
  console.log("user",user);
  return (
    <>
      <div className="profileMain">
        <Image src={Path} alt="Image description" fluid={true} />
        <h6>Alishon Robart</h6>
        <span>ID. {user}</span>
        <Image
          src={borderImage}
          alt="border image"
          fluid={true}
          className="border_image"
        />
      </div>
    </>
  );
};

export default Profile;
