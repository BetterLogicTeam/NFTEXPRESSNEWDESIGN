import React from "react";
import BgLayout from "../../components/sharecomponent/BgLayout";
import Form from "react-bootstrap/Form";

const StakingNFT = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <BgLayout>
      <div className="BgLayout_Header">
        <h6>Staking / LAG Airdrop</h6>
      </div>
      <div className="StakingNFTForm">
        <div className="StakingNFTItem">
          <h5>Staking</h5>
          <form onSubmit={SubmitHandler}>
            <div className="lar_inputWrper">
              <label htmlFor="email">Staking Amount</label>
              <Form.Select aria-label="Default select example">
                <option>Select Package</option>
                <option value="0">100</option>
                <option value="1"> 200</option>
              </Form.Select>
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="tokenid">Enter Token ID</label>
              <input
                type="text"
                id="tokenid"
                placeholder="Enter Token ID"
                name="tokenid"
              />
            </div>

            <div className="lar_button">
              <button>Stake</button>
            </div>
          </form>
        </div>
        <div className="StakingNFTItem">
          <h5>LAG Airdrop Tokens</h5>
          <form onSubmit={SubmitHandler}>
            <div className="lar_inputWrper">
              <label htmlFor="email">LAG Airdrop Tokens</label>
              <Form.Select aria-label="Default select example">
                <option>Select Package</option>
                <option value="0">100</option>
                <option value="1"> 200</option>
              </Form.Select>
            </div>
            <div className="lar_inputWrper">
              <label htmlFor="tokenid">Enter Token ID</label>
              <input
                type="text"
                id="tokenid"
                placeholder="Enter Token ID"
                name="tokenid"
              />
            </div>

            <div className="lar_button">
              <button>Claim</button>
            </div>
          </form>
        </div>
      </div>
    </BgLayout>
  );
};

export default StakingNFT;
