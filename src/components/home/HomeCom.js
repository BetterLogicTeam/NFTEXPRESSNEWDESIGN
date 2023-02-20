import React, { useEffect, useState } from "react";
import Pricewidget from "./Pricewidget";
import TeamSizeWidget from "./TeamSizeWidget";
import TeamBusiness from "./TeamBusiness";
import MyReferralWidget from "./MyReferralWidget";
import LADChatWidget from "./LADChatWidget";
import TotalEarningWidget from "./TotalEarningWidget";

// import WithdrawalShareWidget from "./WithdrawalShareWidget";

import TimeWidget from "./TimeWidget";
import AffiliateLeftWidget from "./AffiliateLeftWidget";
// import AffiliateRightWidget from "./AffiliateRightWidget";
import { Col, Row } from "react-bootstrap";
import scrollreveal from "scrollreveal";
import { API } from "../../API/Api";
import { useDispatch } from "react-redux";
import { userDetailed } from "../../redux/Slices/NFTSlice";

const HomeCom = () => {
  const [userDetail, setUserDetail] = useState({})
  const dispatch = useDispatch();
  const DashboardAPI = async () => {

    try {

      // let res = await API.get(`/getDashboardValues?id=${user}`)
      let res = await API.get(`/getDashboardValues?id=778899`)

      res = res.data.data[0]
      setUserDetail(res)
      dispatch(userDetailed(res))
     

    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  }
  useEffect(() => {



    DashboardAPI()



    const sr = scrollreveal({
      origin: "top",
      distance: "15px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `.HomeMian .colMb 
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  return (
    <>
      {/* home main div  */}
      <div className="HomeMian">
        <Row className="RowMb">
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <Pricewidget nftpkg={userDetail.totalactivationamount} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <TeamSizeWidget
              LeftActive={userDetail.LeftActiveDownline}
              Left={userDetail.LeftDownline}
              Right={userDetail.RightDownline}
              RightActive={userDetail.RightActiveDownline}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <TeamBusiness
              LeftToday={userDetail.lefttodaybusiness}
              Left={userDetail.leftbusiness}
              Right={userDetail.rightbusiness}
              RightToday={userDetail.righttodaybusiness} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <MyReferralWidget
              LeftActiveDirect={userDetail.LeftActiveDirect}
              LeftDirect={userDetail.LeftDirect}
              RightDirect={userDetail.RightDirect}
              RightActiveDirect={userDetail.RightActiveDirect} />
          </Col>

          {/* referal div here  */}

          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <AffiliateLeftWidget />
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <LADChatWidget />
          </Col>
        </Row>
      </div>

      {/* home page second div flex section  */}
      <div className="HomeMian pb-3 mb-3 flexz">
        <Row className="RowMb">
          <Col xs={12} sm={12} md={12} lg={6} className="colMb mb-lg-0 mb-md-3">
            <TotalEarningWidget withdrawl={userDetail.withdrawal} netbalance={userDetail.netbal} totalincome={userDetail.totalincome} />
          </Col>
          {/* <Col xs={12} sm={12} md={6} className="colMb">
            <AffiliateLeftWidget />
          </Col> */}
          <Col xs={12} sm={12} md={12} lg={6} className="colMb mx-auto">
            <TimeWidget timetoqualify={userDetail.Bonus30DayTimer} timetoearn={userDetail.Bonus30DayTimer} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeCom;
