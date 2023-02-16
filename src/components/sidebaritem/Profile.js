import React from "react";
import { Image } from "react-bootstrap";
import Path from "../../assets/images/profile.png";
import borderImage from "../../assets/images/borderImage.png";

const Profile = () => {
  return (
    <>
      <div className="profileMain">
        <Image src={Path} alt="Image description" fluid={true} />
        <h6>Alishon Robart</h6>
        <span>ID. 123456</span>
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
