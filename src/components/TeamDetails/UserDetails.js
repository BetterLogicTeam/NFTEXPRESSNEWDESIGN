import React from "react";
import { Image } from "react-bootstrap";
// import userCover from '../../assets/images/userCover.png';
import circulProfile from "../../assets/images/circulProfile.png";
import styled from "styled-components";

const UserDetails = () => {
  const LastSkillFill = styled.div`
    background: rgba(255, 255, 255, 0.46);
    border-radius: 11px;
    width: 50%;
    height: 35px;
  `;
  const LastSkillValue = styled.div`
    position: absolute;
    top: 24%;
    left: 50%;
    font-family: "sans-serif";
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 21px;
    color: #ffffff;
    opacity: 0.9;
  `;

  return (
    <>
      <div className="UserDetailsMain">
        {/* <div className="BgLayout_Header mb-4">
          <h6>User Details</h6>
        </div> */}
        <div className="UserDetailsHeader">
          <div className="UsersProfiles usqa">
            <div className="circulProfile">
              <Image src={circulProfile} alt="Image description" fluid={true} />
            </div>
            <div className="ProfileDetails">
              <h6> Current Rank</h6>
              <h5>username</h5>
              <h4>Rank Royalty $981</h4>
            </div>
          </div>

          <div className="UsersProfiles resp">
            <div className="circulProfile">
              <Image src={circulProfile} alt="Image description" fluid={true} />
            </div>
            <div className="ProfileDetails">
              <h6> Next Rank</h6>
              <h5>username</h5>
              <h4>Rank Royalty $981</h4>
            </div>
          </div>
        </div>

        <div className="userskil">
          <div className="userskilTit">
            <span>Completed</span>
            <span>Required</span>
          </div>

          <div className="userskilOne">
            <div className="userskilFill">260</div>
            <div className="userskilOneText">2000</div>
          </div>

          <div className="LegOneSkill">
            <h6>Leg 1</h6>
            <div className="LegOneSkillProgress">
              <div className="userskilOne">
                <div className="userskilFill">0</div>
                <div className="userskilOneText">Max. 800</div>
              </div>
            </div>
          </div>
          <div className="LegOneSkill">
            <h6>Leg 2</h6>
            <div className="LegOneSkillProgress">
              <div className="userskilOne">
                <div className="userskilFill">0</div>
                <div className="userskilOneText">Max. 800</div>
              </div>
            </div>
          </div>
          <div className="LegOneSkill">
            <h6>others</h6>
            <div className="LegOneSkillProgress">
              <div className="userskilOne">
                <div className="userskilFill">0</div>
                <div className="userskilOneText">Max. 800</div>
              </div>
            </div>
          </div>
          <div className="lastSkill">
            <LastSkillFill></LastSkillFill>
            <LastSkillValue>40% Rule</LastSkillValue>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
