import React, { useState } from "react";

const LAGToken = () => {
  const [inputValue, setInputValue] = useState({
    TotalLag: "",
    Lagtoken: "",
  });

  function handleInputChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="LARToken_Main">
        <div className="LARToken_Header">
          <h6>LAG Token Withdrawal </h6>
        </div>

        <div className="lar_fromMain">
          <form onSubmit={submitHandler}>
            <div className="lar_inputWrper">
              <label htmlFor="WalletAmount">Total LAG Token</label>
              <input
                type="text"
                id="WalletAmount"
                placeholder="Amount"
                name="amount"
                value={inputValue.TotalLag}
                onChange={handleInputChange}
              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="Withdrawal">Withdrawal LAG Token</label>
              <input
                type="text"
                id="Withdrawal"
                placeholder="Token"
                name="token"
                value={inputValue.Lagtoken}
                onChange={handleInputChange}
              />
            </div>
            <div className="lar_button">
              <button>Withdraw</button>
              <button>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LAGToken;
