import React, { useState } from "react";
import BgLayout from "../sharecomponent/BgLayout";
import CountrySelect from "react-bootstrap-country-select";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
function UserInfo() {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  const [value, setValue] = useState(null);
  return (
    <BgLayout>
      <div className="BgLayout_Header">
        <h6>Profile</h6>
      </div>
      <div className="UserProfile">
        <div className="lar_fromMain">
          <form onSubmit={SubmitHandler}>
            <div className="lar_inputWrper">
              <label htmlFor="email">Enter Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                name="amount"
              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="walletAddress">Enter Wallet Address</label>
              <input
                type="text"
                id="walletAddress"
                placeholder="Enter Wallet Address"
              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="username">Enter User Name</label>
              <input type="text" id="username" placeholder="Enter User Name" />
            </div>
            <div className="CountrySelectMain lar_inputWrper">
              <span>Select Country</span>
              <CountrySelect
                flags={true}
                defaultCountry="us"
                value={value}
                onChange={setValue}
              />
            </div>
          
            <div className="lar_button">
              <button>SEND OTP</button>
            </div>
          </form>
        </div>
      </div>
    </BgLayout>
  );
}

export default UserInfo;
