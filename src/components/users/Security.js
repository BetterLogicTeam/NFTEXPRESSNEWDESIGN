import React from "react";
import img01 from "../../assets/images/googlexli.png";
import BgLayout from "../sharecomponent/BgLayout";
import { Image } from "react-bootstrap";
// import googlepay from "../../assets/images/google-pay.png";
// import downloadappstore from "../../assets/images/downloadappstore.png";

// import { Image } from "react-bootstrap";
function Security() {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  const ChangeSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <BgLayout>
      <div className="BgLayout_Header">
        <h6>Security</h6>
      </div>

      <div className="securityMain">
        <div className="securityitem">
          <div className="appconnection">
            <h5>Two Factor Authentication</h5>
            <p>App connection is active</p>
            <button>Connect App</button>

            <div className="gogxli">
              <Image src={img01} alt="image" fluid={true} />
            </div>

            <div className="googlebuttonflex">
              <a href="/" tabIndex="0">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="image"
                  fluid={true}
                />
              </a>

              <a href="/" tabIndex="0">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="image"
                  fluid={true}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="securityitem">
          <div className="changePassword">
            <h5>Change Password</h5>
            <div className="lar_fromMain">
              <form onSubmit={ChangeSubmitHandler}>
                <div className="lar_inputWrper">
                  <label htmlFor="Password">Password</label>
                  <input type="password" id="Password" placeholder="Password" />
                </div>
                <div className="lar_inputWrper">
                  <label htmlFor="NewPassword">New Password</label>
                  <input
                    type="password"
                    id="NewPassword"
                    placeholder="New Password"
                  />
                </div>
                <div className="lar_inputWrper">
                  <label htmlFor="ConfirmPassword">Change Password</label>
                  <input
                    type="password"
                    id="ChangePassword"
                    placeholder="Change Password"
                  />
                </div>
                <div className="lar_button">
                  <button>SEND OTP</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="securityitem">
          <div className="changeEmail">
            <h5 className="mb-3">Change Email</h5>
            <div className="lar_fromMain">
              <form onSubmit={SubmitHandler}>
                <div className="lar_inputWrper">
                  <label htmlFor="email">E-Mail </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    name="amount"
                  />
                </div>
                <div className="lar_button">
                  <button>SEND OTP</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BgLayout>
  );
}

export default Security;
