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

function App() {
  return (
    <BrowserRouter>
      <div className="App_Main"  >
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/mint_nft" element={<MintNft />} />
            <Route path="/" element={<Home />} />
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
