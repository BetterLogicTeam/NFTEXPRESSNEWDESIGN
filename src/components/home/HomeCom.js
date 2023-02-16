import React, { useEffect } from "react";
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

const HomeCom = () => {
  useEffect(() => {
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
            <Pricewidget />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <TeamSizeWidget />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <TeamBusiness />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <MyReferralWidget />
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
            <TotalEarningWidget />
          </Col>
          {/* <Col xs={12} sm={12} md={6} className="colMb">
            <AffiliateLeftWidget />
          </Col> */}
          <Col xs={12} sm={12} md={12} lg={6} className="colMb mx-auto">
            <TimeWidget />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeCom;
