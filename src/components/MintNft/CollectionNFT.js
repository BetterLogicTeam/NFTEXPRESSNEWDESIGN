import React, { useState, useMemo, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import nftsImage from "../../assets/images/mint_nfts.png";
import hart from "../../assets/images/hart.png";
import share from "../../assets/images/share.png";
import scrollreveal from "scrollreveal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
// import { toast } from 'react-toastify'
import axios from 'axios'
import {
  BUSD_Token,
  BUSD_Token_ABI,
  GLABA_NFT,
  GLABA_NFT_1000,
  GLABA_NFT_2500,
  GLABA_NFT_500,
  GLABA_NFT_5000,
  GLABA_NFT_ABI,
  GLABA_NFT_ABI_1000,
  GLABA_NFT_ABI_20_5000,
  GLABA_NFT_ABI_2500,
  GLABA_NFT_ABI_500,
  GLABA_NFT_ABI_5000,
  GLABA_NFT_Icome_5000,
  GLABA_NFT_Income,
  GLABA_NFT_Income_1000,
  GLABA_NFT_Income_2500,
  GLABA_NFT_Income_500,
  GLABA_NFT_Income_ABI,
  GLABA_NFT_Income_ABI_1000,
  GLABA_NFT_Income_ABI_2500,
  GLABA_NFT_Income_ABI_500,
  GLABA_NFT_Income_ABI_5000,
  LaRace_Governance_Token,
  LaRace_Governance_Token_ABI,
  WIRE_Token,
  WIRE_Token_ABI,
} from '../../utilies/constant'
import { loadWeb3 } from '../../apis/api'

const CollectionNFT = () => {
  const singlenft = useSelector((state) => state.nft.SingleNFT);
  // console.log("singlenft", singlenft);

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

  const [value, setCount] = useState(1);
  const [selectedValue, setSelectedValue] = useState({
    name: "BUSD",
    price: "100",
  });
  const [PriceArray, setPriceArray] = useState([{
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
  },]);


  const incrementCount = useMemo(
    () => () => setCount((prev) => prev + 1),
    [value]
  );
  const decrementCount = useMemo(() => {
    if (value === 0) {
      return;
    }
    return () => setCount((prev) => prev - 1);
  }, [value]);

  const handleChange = (e) => {
    e.preventDefault();
    let obj = JSON.parse(e.target.value);
    setSelectedValue(obj);
  };

  const mint = async () => {
    let acc = await loadWeb3()
    if (acc == 'No Wallet') {
      toast.error('No Wallet Connected')
    } else if (acc == 'Wrong Network') {
      toast.error('Wrong Newtwork please connect to Binance smart chain network')
    } else {

      if (selectedValue?.name == PriceArray[0].name) {

      }

      // try {
      //   let res = await API.get(`/getDashboardValues?id=${user}`)
      //   res = res.data.data[0]
      //   let own_Address = res.address
      //   console.log('res_Mint', own_Address == acc)
      //   // res = res.data.data;
      //   if (own_Address == '') {
      //     toast.error('Please Update Your Profile')
      //     navigate('/dashboard/Profile')
      //   } else if (own_Address == acc) {
      //     try {
      //       setbtnFour('Please Wait While Processing')
      //       const web3 = window.web3
      //       let nftTokenOf_BUSD = new web3.eth.Contract(BUSD_Token_ABI, BUSD_Token)
      //       let nftTokenOf_Wire = new web3.eth.Contract(WIRE_Token_ABI, WIRE_Token)
      //       let nftContractOf
      //       let increment_each_data
      //       if (singlenft.count == 100) {
      //         nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT)
      //         increment_each_data = 0.00365946
      //       } else if (contract_select == 500) {
      //         nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500)
      //         increment_each_data = 0.0109232
      //       } else if (contract_select == 1000) {
      //         nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000)
      //         increment_each_data = 0.0182093
      //       } else if (contract_select == 2500) {
      //         nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500)
      //         increment_each_data = 0
      //       } else if (contract_select == 5000) {
      //         nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000)
      //         increment_each_data = 0.0910139
      //       }

      //       let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call()
      //       if (value > totalnft) {
      //         toast.error(`Maximum Limit is ${totalnft} `)
      //       } else {
      //         let maxSupply = await nftContractOf.methods.maxsupply().call()
      //         let ttlSupply = await nftContractOf.methods.totalSupply().call()
      //         let paused = await nftContractOf.methods.paused().call()
      //         let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call()
      //         let mintingbnbPrice_Toke_1 = await nftContractOf.methods.MinitngPricein_busd_single().call()
      //         mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1)
      //         mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1)
      //         let totalMintingPriceToken_1 = Number(value * mintingbnbPrice_Toke_1)
      //         // totalMintingPriceToken_1=(totalMintingPriceToken_1*20/100)+totalMintingPriceToken_1

      //         console.log('Change_price', totalMintingPriceToken_1)

      //         // if (minting_counter == 1) {

      //         //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1
      //         // } else if (minting_counter == 2) {
      //         //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1 * 2

      //         // }
      //         totalMintingPriceToken_1 = web3.utils.toWei(totalMintingPriceToken_1.toString())

      //         if (parseInt(ttlSupply) < parseInt(maxSupply)) {
      //           if (paused == false) {
      //             if (value < parseInt(maxLimitprTransaction)) {
      //               if (contract_select == 100) {
      //                 await nftTokenOf_BUSD.methods.approve(GLABA_NFT, totalMintingPriceToken_1).send({
      //                   from: acc,
      //                 })
      //               } else if (contract_select == 500) {
      //                 await nftTokenOf_BUSD.methods.approve(GLABA_NFT_500, totalMintingPriceToken_1).send({
      //                   from: acc,
      //                 })
      //               } else if (contract_select == 1000) {
      //                 await nftTokenOf_BUSD.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_1).send({
      //                   from: acc,
      //                 })
      //               } else if (contract_select == 2500) {
      //                 await nftTokenOf_BUSD.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_1).send({
      //                   from: acc,
      //                 })
      //               } else if (contract_select == 5000) {
      //                 await nftTokenOf_BUSD.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_1).send({
      //                   from: acc,
      //                 })
      //               }

      //               toast.success('Approve Confirmed BUSD Token')

      //               let hash = await nftContractOf.methods.mint_with_BUSD_100(value, totalMintingPriceToken_1).send({
      //                 from: acc,
      //               })
      //               setbtnFour('Mint With BUSD')
      //               hash = hash.transactionHash
      //               // console.log("hash", hash);
      //               // console.log("APIDATA", user,contract_select,acc,totalMintingPriceToken_1,value);

      //               // mintingbnbPrice=web3.utils.fromWei((mintingbnbPrice).toString())
      //               let postapi = await axios.post('https://nftxpress-1.nakshtech.info/activation', {
      //                 uid: user,
      //                 sid: '0',
      //                 transaction: hash,
      //                 amount: contract_select,
      //                 useraddress: acc,
      //                 tokenamount: '0',
      //                 type: 'Without Referral ID',
      //                 quantity: value,
      //                 horseType: minting_counter == 1 ? 'SINGLE' : 'DUAL',
      //               })
      //               toast.success('Transaction Confirmed')

      //               console.log('postapi', postapi)
      //               // toast.success(postapi.data.data)
      //               setinputdatahere(' ')
      //             } else {
      //               toast.error('No of Minting is Greater than maximum limit Per Transaction')
      //               setbtnFour('Mint With BUSD')
      //             }
      //           } else {
      //             toast.error('Paused is True')
      //             setbtnFour('Mint With BUSD')
      //           }
      //         } else {
      //           toast.error('Max Supply is Greater than total Supply')
      //           setbtnFour('Mint With BUSD')
      //         }
      //       }
      //     } catch (e) {
      //       console.log('Error while minting ', e)
      //       toast.error('Transaction failed')
      //       setbtnFour('Mint With BUSD')
      //     }
      //   } else {
      //     toast.error('Wrong Metamask Address')
      //     setinputdatahere(' ')
      //   }
      // } catch (e) {
      //   setinputdatahere(' ')
      // } 
    }
  }



  const getVAlues = async () => {

    // console.log("res",inputValue)
    // setShowModal(false)
    let acc = await loadWeb3()
    // console.log("ACC=",acc)
    if (acc == 'No Wallet') {
      toast.error('No Wallet Connected')
    } else if (acc == 'Wrong Network') {
      toast.error('Wrong Newtwork please connect to Binance smart chain network')
    } else {
      try {

        const web3 = window.web3
        let nftContractOf
        let increment_each_data
        if (singlenft.count == 100) {

          nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT)
          increment_each_data = 0.00365946
        } else if (singlenft.count == 500) {
          nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500)
          increment_each_data = 0.0109232
        } else if (singlenft.count == 1000) {
          nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000)
          increment_each_data = 0.0182093
        } else if (singlenft.count == 2500) {
          nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500)
          increment_each_data = 0
        } else if (singlenft.count == 5000) {
          nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000)
          increment_each_data = 0.0910139
        }

        let mintingbnbPrice_Toke_1 = await nftContractOf.methods.ValueinToken().call()

        // mintingbnbPrice_Toke_1 = web3.utils.toWei(mintingbnbPrice_Toke_1);

        mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1)
        // mintingbnbPrice_Toke_1=mintingbnbPrice_Toke_1.Fixed(3)
        mintingbnbPrice_Toke_1 = Number(mintingbnbPrice_Toke_1) + increment_each_data
        mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1).toFixed(4)

        if (singlenft.minting_counter == 1) {
          mintingbnbPrice_Toke_1 = mintingbnbPrice_Toke_1 * value

          setPriceArray(PriceArray => [...PriceArray, PriceArray[0].price = mintingbnbPrice_Toke_1]
          )

          // setToken_Value_1(mintingbnbPrice_Toke_1)
        } else if (singlenft.minting_counter == 2) {
          // mintingbnbPrice_Toke_1 = mintingbnbPrice_Toke_1 * value
          // setToken_Value_1(mintingbnbPrice_Toke_1 * 2)
          setPriceArray([...PriceArray, PriceArray[0].price = mintingbnbPrice_Toke_1 * 2])

        }

        let mintingbnbPrice_Toke_2 = await nftContractOf.methods.ValueinToken1().call()
        mintingbnbPrice_Toke_2 = web3.utils.fromWei(mintingbnbPrice_Toke_2)
        mintingbnbPrice_Toke_2 = Number(mintingbnbPrice_Toke_2) + Number(increment_each_data)

        mintingbnbPrice_Toke_2 = parseFloat(mintingbnbPrice_Toke_2).toFixed(4)
        if (singlenft.minting_counter == 1) {
          mintingbnbPrice_Toke_2 = mintingbnbPrice_Toke_2 * value
          setToken_Value_2(mintingbnbPrice_Toke_2)
        } else if (singlenft.minting_counter == 2) {
          // mintingbnbPrice_Toke_2 = mintingbnbPrice_Toke_2 * value

          setToken_Value_2(mintingbnbPrice_Toke_2 * 2)
        }

        let mintingbnbPrice_Toke_3 = await nftContractOf.methods.ValueinToken_single().call()

        mintingbnbPrice_Toke_3 = web3.utils.fromWei(mintingbnbPrice_Toke_3)
        mintingbnbPrice_Toke_3 = Number(mintingbnbPrice_Toke_3) + Number(increment_each_data)
        // console.log("value1", mintingbnbPrice_Toke_3);
        mintingbnbPrice_Toke_3 = parseFloat(mintingbnbPrice_Toke_3).toFixed(4)
        if (singlenft.minting_counter == 1) {
          mintingbnbPrice_Toke_3 = mintingbnbPrice_Toke_3 * value

          setToken_Value_3(mintingbnbPrice_Toke_3)
        } else if (singlenft.minting_counter == 2) {
          // mintingbnbPrice_Toke_3 = mintingbnbPrice_Toke_3 * value
          setToken_Value_3(mintingbnbPrice_Toke_3 * 2)
        } else {
          mintingbnbPrice_Toke_3 = mintingbnbPrice_Toke_3 * value

          setToken_Value_3(mintingbnbPrice_Toke_3)
        }

        let mintingPriceBNB = await nftContractOf.methods.Valueinbnb().call()
        let add_Value_in_BNB = await nftContractOf.methods.Valueinbnb_single().call()

        let add_Value_in = web3.utils.fromWei(add_Value_in_BNB.toString())
        mintingPriceBNB = web3.utils.fromWei(mintingPriceBNB)
        mintingPriceBNB = Number(mintingPriceBNB) + Number(increment_each_data)
        mintingPriceBNB = parseFloat(mintingPriceBNB).toFixed(4)

        let Mint_Value_WithOut_Wire = Number(add_Value_in) + Number(increment_each_data)
        Mint_Value_WithOut_Wire = parseFloat(Mint_Value_WithOut_Wire).toFixed(4)

        if (singlenft.minting_counter == 1) {
          mintingPriceBNB = mintingPriceBNB * value
          Mint_Value_WithOut_Wire = Mint_Value_WithOut_Wire * value
          //    console.log("Mint_Value_WithOut_Wire", Mint_Value_WithOut_Wire);

          setToken_Value_BNB_Without_wire(Mint_Value_WithOut_Wire)
          setToken_Value_BNB(mintingPriceBNB)
        } else if (singlenft.minting_counter == 2) {
          setToken_Value_BNB(mintingPriceBNB * 2)
          setToken_Value_BNB_Without_wire(Mint_Value_WithOut_Wire * 2)
        } else {
          Mint_Value_WithOut_Wire = Mint_Value_WithOut_Wire * value
          setToken_Value_BNB_Without_wire(Mint_Value_WithOut_Wire)
          mintingPriceBNB = mintingPriceBNB * value
          setToken_Value_BNB(mintingPriceBNB)
        }

        let mintingPriceBUSD = await nftContractOf.methods.MinitngPricein_busd().call()

        mintingPriceBUSD = web3.utils.fromWei(mintingPriceBUSD)

        let Value_IN_BUSD = await nftContractOf.methods.MinitngPricein_busd_single().call()
        Value_IN_BUSD = web3.utils.fromWei(Value_IN_BUSD)

        Value_IN_BUSD = parseFloat(Value_IN_BUSD).toFixed(4)

        mintingPriceBUSD = parseFloat(mintingPriceBUSD).toFixed(4)

        if (singlenft.minting_counter == 1) {
          mintingPriceBUSD = mintingPriceBUSD * value
          Value_IN_BUSD = Value_IN_BUSD * value

          setToken_Value_BUSD_Without_wire(Value_IN_BUSD)
          setToken_Value_BUSD(mintingPriceBUSD)
        } else if (singlenft.minting_counter == 2) {
          // mintingPriceBUSD = mintingPriceBUSD * value
          // console.log("mintingPriceBUSD", mintingPriceBUSD*2);
          setToken_Value_BUSD_Without_wire(Value_IN_BUSD * 2)
          setToken_Value_BUSD(mintingPriceBUSD * 2)
        } else {
          mintingPriceBUSD = mintingPriceBUSD * value
          // mintingPriceBUSD=Number(mintingPriceBUSD)+

          setToken_Value_BUSD(mintingPriceBUSD)

          mintingPriceBUSD = mintingPriceBUSD * value
          Value_IN_BUSD = Value_IN_BUSD * value

          setToken_Value_BUSD_Without_wire(Value_IN_BUSD)
        }
      } catch (e) {
        console.log('Error while Get Vale ', e)
      }
    }
  }


  useEffect(() => {
    // getVAlues()

  }, [singlenft.count])
  console.log('price array', PriceArray);
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
                <div className="NftArt_CountOutout">{value}</div>
                <button onClick={incrementCount}>+</button>
              </div>
              <div className="BUSD_Mian">
                {selectedValue && (
                  <button onClick={mint}>
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
              {/* <Button>
                Buy NFT
              </Button> */}
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
