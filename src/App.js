import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Home,
  MintNft,
  Collection,
  MintingHistory,
  LARToken,
  NFTAddressPage,
  UserDetailsPage,
  MatchingIncomePage,
  // AllSalesPage,
  SelfPage,
  GovernanceTokenPage,
  GameRewardTokenPage,
  NftTokenPage,
  LARTokenHistoryPage,
  LAGTokenPage,
  LAGTokenPageHistory,
  ReferralIncomePage,
  QuickStarterPage,
  TeamBonusPage,
  WithdrawalSharePage,
  WithdrawalIncomePage,
  AddressLAGPage,
  SportsBonusPage,
  DirectLegBusinessPage,
  NotFound,
  LevelDetailsPage,
  MyReferralPage,
  MyTeamPage,
  MintingHistoryPage,
  SecurityPage,
  StakingNFTPage,
  NFTStakingHistoryPage,
  LAGAirdropHistoryPage,
  ProfilePage,
  NFTStakingIncomePage,
  TutorialPage,
} from "./pages";
import PrivateRoutes from './utils/PrivateRoutes'
import Login from "./pages/Login";
import MyLogin from "./pages/Login";
import PublicRoute from "./utils/PublicRoute";
import Index_main from "./components/Index_main";
import About_main from './components/Landing_Page/About/About'
import Explore_main from './components/Landing_Page/Explore/Explore'
import How_to_play_main from './components/Landing_Page/How_to_play/How_to_play'
import Tokenomics_main from './components/Landing_Page/Tokenomics/Tokenomics'
import Contact_main from "./components/Contact_main";
import Register_main from "./components/Register_main";
import Login_main from "./components/Login_main";
// import Contact_main from './components/Landing_Page/'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WellComePage from "./components/Welcom_page/wellComePage";
import Wallet_Address_change from "./components/Landing_Page/Wallet_Address/Wallet_Address_change";
import Forgat_Password from "./components/Landing_Page/Forgat_Password/Forgat_Password";
import Get_Password_result from "./components/Landing_Page/OTP_varify_forget_password/Get_Password_result";
import OTP from "./components/Landing_Page/Varify-OTP/OTP";
import Varify_forget_Password from "./components/Landing_Page/OTP_varify_forget_password copy/Varify_forget_Password";


function App() {
  return (
    <BrowserRouter>

      <div className="App_Main"  >
      <ToastContainer />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Index_main />} />
          <Route path="/About_main" element={<About_main />} />
          <Route path="/Explore_main" element={<Explore_main />} />
          <Route path="/How_to_play_main" element={<How_to_play_main />} />
          <Route path="/Tokenomics_main" element={<Tokenomics_main />} />
          <Route path="/Contact_main" element={<Contact_main />} />
          <Route path="Login_main" element={<Login_main />} />
          <Route path="Register_main" element={<Register_main />} />
          <Route path="welComePage/:email" element={<WellComePage />} />
          <Route path="Wallet_Address_change" element={<Wallet_Address_change />} />
          <Route path='Forgat_Password' element={<Forgat_Password />} />
          <Route path='Forget_Password_Result' element={<Get_Password_result />} />

          <Route path='OTP/:email' element={<OTP />} />
          <Route path='Varify_forget_Password/:email' element={<Varify_forget_Password />} />


          <Route element={<PrivateRoutes />}>
            <Route path="/mint_nft" element={<MintNft />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/matching_tree" element={<MintingHistory />} />
            <Route path="/lar_token" element={<LARToken />} />
            <Route path="/nft_address" element={<NFTAddressPage />} />
            <Route
              path="/matching_level_income"
              element={<MatchingIncomePage />}
            />
            {/* <Route path="/country_sales" element={<AllSalesPage />} /> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/self" element={<SelfPage />} />
            <Route path="/governance_token" element={<GovernanceTokenPage />} />
            <Route path="/game_reward" element={<GameRewardTokenPage />} />
            <Route path="/nft_token" element={<NftTokenPage />} />
            <Route path="/lar_token_history" element={<LARTokenHistoryPage />} />
            <Route path="/lag_token" element={<LAGTokenPage />} />
            <Route path="/referral_income" element={<ReferralIncomePage />} />
            <Route path="/quick_starter" element={<QuickStarterPage />} />
            <Route path="/team_bonus" element={<TeamBonusPage />} />
            <Route
              path="/withdrawal_share_bonus"
              element={<WithdrawalSharePage />}
            />
            <Route path="/lag_token_history" element={<LAGTokenPageHistory />} />
            <Route path="/withdrawal_Income" element={<WithdrawalIncomePage />} />
            <Route path="/address_lag" element={<AddressLAGPage />} />
            <Route path="/sports_bonus" element={<SportsBonusPage />} />
            <Route
              path="/direct_leg_business"
              element={<DirectLegBusinessPage />}
            />
            <Route path="/level_details" element={<LevelDetailsPage />} />
            <Route path="/my_referral" element={<MyReferralPage />} />
            <Route path="/my_Team" element={<MyTeamPage />} />
            <Route path="/minting_history" element={<MintingHistoryPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/user_details" element={<UserDetailsPage />} />
            <Route path="/staking_nft" element={<StakingNFTPage />} />
            <Route
              path="/nft_staking_history"
              element={<NFTStakingHistoryPage />}
            />
            <Route
              path="/lag_airdrop_token"
              element={<LAGAirdropHistoryPage />}
            />
            <Route
              path="/nft_staking_income"
              element={<NFTStakingIncomePage />}
            />
            <Route path="/tutorial" element={<TutorialPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<PublicRoute><MyLogin /></PublicRoute>} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
