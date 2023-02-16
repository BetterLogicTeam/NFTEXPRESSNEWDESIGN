import React from "react";
import { Image } from "react-bootstrap";
import progresshorse from "../../assets/images/progresshorse.png";
import styled from "styled-components";

const HorseProgress = () => {
  const HorseProgressBg = styled.div`
    position: relative;
    background: #7572f2;
    border-radius: 4px;
    height: 20px;
    &::after {
      content: "";
      position: absolute;
      background: rgba(255, 255, 255, 0.48);
      border-radius: 4px;
      top: 0;
      left: 0;
      width: 10%;
      height: 20px;
    }
  `;
  const MyStyledImage = styled(Image)`
    position: absolute;
    bottom: 100%;
    left: 9%;
    z-index: 1;
  `;
  return (
    <>
      <div className="HorseProgressMain">
        <HorseProgressBg>
          <MyStyledImage
            src={progresshorse}
            alt="Image description"
            fluid={true}
          />
        </HorseProgressBg>
        <p>
          You have earned a total $90 out of $800 (10% out of your total 100% of
          your investment)
        </p>
      </div>
    </>
  );
};

export default HorseProgress;
