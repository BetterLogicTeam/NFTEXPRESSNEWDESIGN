import React, { useState } from "react";

const LARTokenWithdrawal = () => {
  const [inputValue, setInputValue] = useState({
    amount: "",
    token: "",
    usdamount: "",
    netamount: "",
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
          <h6>LAR Token Withdrawal </h6>
        </div>

        <div className="lar_fromMain">
          <form onSubmit={submitHandler}>
            <div className="lar_inputWrper">
              <label htmlFor="WalletAmount">Wallet Net USD Amount</label>
              <input
                type="text"
                id="WalletAmount"
                placeholder="Amount"
                name="amount"
                value={inputValue.amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="USDAmount">Enter USD Amount</label>
              <input
                type="number"
                id="USDAmount"
                placeholder="$"
                name="usdamount"
                value={inputValue.usdamount}
                onChange={handleInputChange}
              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="netamount">Net Amount</label>
              <input
                type="number"
                id="netamount"
                placeholder="$"
                name="netamount"
                value={inputValue.netamount}
                onChange={handleInputChange}
              />
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="Withdrawal">Withdrawal LAR Token</label>
              <input
                type="text"
                id="Withdrawal"
                placeholder="Token"
                name="token"
                value={inputValue.token}
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

export default LARTokenWithdrawal;
