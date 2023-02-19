import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import progresshorse from "../../assets/images/progresshorse.png";
import styled from "styled-components";
import { API } from "../../API/Api";

const HorseProgress = () => {
  const [userDetail, setUserDetail] = useState({})

  const DashboardAPI = async () => {

    try {

      // let res = await API.get(`/getDashboardValues?id=${user}`)
      let res = await API.get(`/getDashboardValues?id=778899`)

      res = res.data.data[0]
      setUserDetail(res)
      console.log("res", res.RightDirect);




    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  }
  useEffect(() => {



    DashboardAPI()




  }, []);




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
      width: ${() => ` ${userDetail.RightDirect}%`};
      height: 20px;
    }
  `;
  const MyStyledImage = styled(Image)`
    position: absolute;
    bottom: 100%;
    left: ${() => ` ${userDetail.RightDirect}%`};  
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
