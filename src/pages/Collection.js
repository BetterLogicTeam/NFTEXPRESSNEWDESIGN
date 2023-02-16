import React from "react";
import { Layout, CollectionNFT } from "../components";

import BgLayout from "../components/sharecomponent/BgLayout";
import "../assets/css/Nft.css";

const Collection = () => {
  return (
    <>
      <Layout>
        <BgLayout>
          <div className="BgLayout_Header">
            <h6>Collection</h6>
          </div>
        </BgLayout>
      </Layout>
    </>
  );
};

export default Collection;
