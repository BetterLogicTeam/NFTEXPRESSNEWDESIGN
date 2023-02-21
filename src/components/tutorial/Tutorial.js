import React from "react";
import BgLayout from "../sharecomponent/BgLayout";
import nftvideo2 from "../../assets/images/nftvideo2.mp4";
const Tutorial = () => {
  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Tutorial</h6>
        </div>

        <div className="TutorialVideoMain ">
          <div className="Nft_cardMain cardmaina">
            <video controls className="CollectionCrdvid">
              <source src={nftvideo2} type="video/mp4" />
            </video>

            <div className="nftsPrice">
              <span>20$</span>
              <span>500</span>
            </div>
          </div>

          <div className="Nft_cardMain cardmaina">
            <video controls className="CollectionCrdvid">
              <source src={nftvideo2} type="video/mp4" />
            </video>
            <div className="nftsPrice">
              <span>20$</span>
              <span>500</span>
            </div>
          </div>
          <div className="Nft_cardMain cardmaina">
            <video controls className="CollectionCrdvid">
              <source src={nftvideo2} type="video/mp4" />
            </video>
            <div className="nftsPrice">
              <span>20$</span>
              <span>500</span>
            </div>
          </div>
          <div className="Nft_cardMain cardmaina">
            <video controls className="CollectionCrdvid">
              <source src={nftvideo2} type="video/mp4" />
            </video>
            <div className="nftsPrice">
              <span>20$</span>
              <span>500</span>
            </div>
          </div>
          <div className="Nft_cardMain cardmaina">
            <video controls className="CollectionCrdvid">
              <source src={nftvideo2} type="video/mp4" />
            </video>
            <div className="nftsPrice">
              <span>20$</span>
              <span>500</span>
            </div>
          </div>
        </div>
      </BgLayout>
    </>
  );
};

export default Tutorial;
