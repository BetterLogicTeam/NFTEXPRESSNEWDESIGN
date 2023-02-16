import React, { useState, useMemo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import nftsImage from "../../assets/images/mint_nfts.png";
import hart from "../../assets/images/hart.png";
import share from "../../assets/images/share.png";
import scrollreveal from "scrollreveal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

const CollectionNFT = () => {
  const singlenft = useSelector((state) => state.nft.SingleNFT);
  console.log("singlenft", singlenft);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "10px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `.CollectionMain .col-md-3,.CollectionMain .col-md-9
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  const [count, setCount] = useState(1);
  const [selectedValue, setSelectedValue] = useState({
    name: "BUSD",
    price: "100",
  });
  const PriceArray = [
    {
      name: "BUSD",
      price: "100",
    },
    {
      name: "Mint With BUSD",
      price: "2220.22",
    },
    {
      name: "Mint With LAR",
      price: "12550",
    },
    {
      name: "Mint With LAR",
      price: "12550",
    },
    {
      name: "BUSD And Wire",
      price: "12870",
    },
    {
      name: "BUSD And Income",
      price: "84729",
    },
  ];

  const incrementCount = useMemo(
    () => () => setCount((prev) => prev + 1),
    [count]
  );
  const decrementCount = useMemo(() => {
    if (count === 0) {
      return;
    }
    return () => setCount((prev) => prev - 1);
  }, [count]);

  const handleChange = (e) => {
    e.preventDefault();
    let obj = JSON.parse(e.target.value);
    setSelectedValue(obj);
  };

  return (
    <>
      <div className="NftMain CollectionMain">
        <Row>
          <Col xs={12} sm={12} md={3}>
            <div className="Nft_cardMain ">
              {singlenft && singlenft?.imageUrl ? (
                <Image
                  src={singlenft?.imageUrl}
                  alt="Image description"
                  fluid={true}
                  className="CollectionCrdImg"
                />
              ) : singlenft.videoUrl ? (
                <video controls className="CollectionCrdvid">
                  <source src={singlenft?.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={nftsImage}
                  alt="Image description"
                  fluid={true}
                  className="CollectionCrdImg"
                />
              )}

              {/* <h6>
                {singlenft && singlenft?.title ? singlenft?.title : "Ring"}
              </h6>
              <p>
                {singlenft && singlenft?.dec ? singlenft?.dec : "Ring #GLEBA"}
              </p> */}
              <div className="nftsPrice">
                <span>
                  {singlenft && singlenft?.price
                    ? `$${singlenft?.price}`
                    : "$0.10"}
                </span>
                <span>
                  <Image src={hart} alt="Image description" fluid={true} />
                  {singlenft && singlenft?.count ? singlenft?.count : "200"}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <div className="NftArt">
              <div className="NftArt_Count">
                <button onClick={decrementCount}>-</button>
                <div className="NftArt_CountOutout">{count}</div>
                <button onClick={incrementCount}>+</button>
              </div>
              <div className="BUSD_Mian">
                {selectedValue && (
                  <button>
                    {selectedValue?.name} - {selectedValue?.price}
                  </button>
                )}

                <div className="BUSD_text">
                  <Form.Select onChange={handleChange}>
                    {PriceArray?.map((value) => (
                      <>
                        <option value={JSON.stringify(value)} key={value?.name}>
                          {value?.name} - {value?.price}
                        </option>
                      </>
                    ))}
                  </Form.Select>
                </div>
              </div>
              <div className="NftArt_text">
                <h6>NFT Art</h6>
                <h6>NFT Art #GLEBA</h6>
              </div>
              <div className="NftArt_sharebtn">
                <button>
                  <Image src={share} alt="Image description" fluid={true} />
                  Share this NFT
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CollectionNFT;
