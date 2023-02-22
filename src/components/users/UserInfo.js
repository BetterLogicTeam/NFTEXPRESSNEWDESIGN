import React, { useState } from "react";
import BgLayout from "../sharecomponent/BgLayout";
import CountrySelect from "react-bootstrap-country-select";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import { useSelector } from "react-redux";
function UserInfo() {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };


  const userDetail = useSelector((state) => state.nft.userDetail);
  console.log('userDetail', userDetail)

  const [value, setValue] = useState(null);
  const [formValues, setFormValues] = useState(
    {
      email: userDetail.email,
      walletAddress: userDetail.address,
      name: userDetail.f_name,
      country: userDetail.countryname
    }
  );
  const handleForm = (e) => {
    const value = e.target.value;
    setFormValues(
      {
        ...formValues,
        [e.target.name]: value
      }
    )
  }
  console.log('formvalues', formValues)
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
                name="email"
                value={formValues.email}
                onChange={handleForm}
              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="walletAddress">Enter Wallet Address</label>
              <input
                name="walletAddress"

                type="text"
                id="walletAddress"
                placeholder="Enter Wallet Address"
                value={formValues.walletAddress}
                onChange={handleForm}


              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="username">Enter User Name</label>
              <input type="text" id="username" name='name' placeholder="Enter User Name"
                value={formValues.name}
                onChange={handleForm}

              />

            </div>
            <div className="CountrySelectMain lar_inputWrper">
              <span>Select Country</span>
              <CountrySelect
                flags={true}
                defaultCountry="us"
                name='country'
                // value={formValues.country}
                value={value}
                onChange={setValue}
              // onChange={handleForm}

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
