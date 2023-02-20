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
      // console.log("res", res);

      // setTimer_data(res.Bonus7DayTimer)
      // localStorage.setItem("Timer1", res.Bonus7DayTimer);
      // localStorage.setItem("Timer2", res.Bonus30DayTimer);

      // setGlobalPosition(res.GlobalPosition)
      // setcurrentrank(res.currentrank)
      // setnextrank(res.nextrank)
      // setcurrentbusiness(res.currentbusiness)
      // setnextbusiness(res.nextbusiness)
      // setgameWallet(res.gameWallet)
      // setIncomeReward(res.rewardIncome)
      // setNFTROIIncome(res.roiincomeNFT)
      // setTopupDate(res.quickStarterBonusTime)
      // setTotalAirdropToken(res.TotalAirdropToken)
      // setReceivedAirdropToken(res.ReceivedAirdropToken)
      // setrightbusiness(res.rightbusiness)
      // setleftbusiness(res.leftbusiness)
      // setlefttodaybusiness(res.lefttodaybusiness)
      // setrighttodaybusiness(res.righttodaybusiness)
      // setLeftDirect(res.LeftDirect)
      // setBonus30DayTimer(res.Bonus30DayTimer)

      // setTeamBonus(res.TeamBonus)

      // setRightActiveDownline(res.RightActiveDownline)
      // setLeftActiveDownline(res.LeftActiveDownline)
      // setRightDownline(res.RightDownline)
      // setLeftDownline(res.LeftDownline)

      // setRightDirect(res.RightDirect)
      // setLeftDirect(res.LeftDirect)
      // setRightActiveDirect(res.RightActiveDirect)
      // setLeftActiveDirect(res.LeftActiveDirect)

      // settotalactivationamount(res.totalactivationamount)
      // setctoincom(res.cto_income)
      // setparticipantEarned(res.totalincome)
      // // console.log("Data", valueran);
      // valueran = res.totalincome
      // localStorage.setItem("ID", res.totalincome);
      // setpackegeid(res.package)
      // setearn(res?.totalincome)
      // //  Net Balance-----------
      // setnetBalance(res.netbal)
      // //  Total Withdrawal-----------
      // setwithdrawal(res.withdrawal)
      // //  UID-----------
      // setuID(res.uid)
      // //  Referral Income-----------------------
      // setReferral(res.directIncome)
      // // Matching Income------------------------
      // setmatchingicome(res.binary)
      // // ROI Income---------------------
      // setroiIncome(res.roiincome)
      // // Your total earning----------------------
      // setearnAmount(res.MaxIncome)
      // // out of ---------------------------------
      // setTotalAmount(res.tt)
      // setjoinhere(res.totalactivationamount)
      // setEarnAmount(res.EarnAmount)
      // setMaxPer(res.MaxPer)
      // setMaxIncome(res.MaxIncome)
      // setmachingLevel(res.levelincome)
      // let earned_wire = res.ParticipantEarnedWire
      // setparticioatEarnd(earned_wire)
      // setearendUSD(res?.ParticipantEarnedUSD)

      // // console.log("ParticipantEarnedWire",earned_wire);
      // setyesterdaycto(res.yesterdaycto)
      // settodaycto(res.todaycto)
      // settt(res.tt);
      // setallParticipants(res?.TotalMembers)
      // setjoined_last_24_hour(res?.NewToday)
      // // {dashboard?.allParticipants?.all_participants
      // //   ? dashboard?.allParticipants?.all_participants
      // //   : 0}



      // let response = await API.get(`GameWalletData?id=${user}`)

      // // console.log("response",response.data.data[0].total);
      // setgamedata(response.data.data[0].total)



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
