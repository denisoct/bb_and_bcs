import { Routes, Route } from "react-router-dom";
import BetterCallSaul from "../components/Better Call Saul/BetterCallSaul";
import BreakingBadScreen from "../components/Breaking Bad/BreakingBadScreen";
import CharacterScreen from "../components/Character/CharacterScreen";
// import DcScreen from "../components/dc/DcScreen";
// import HeroScreen from "../components/hero/HeroScreen";
// import MarvelScreen from "../components/marvel/MarvelScreen";
import NavBar from "../ui/NavBar";

const DashBoardRoutes = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <NavBar />
        <Routes>
          <Route path="/" element={<BreakingBadScreen />} />
          <Route path="/breaking-bad" element={<BreakingBadScreen />} />
          <Route path="/better-call-saul" element={<BetterCallSaul />} />
          <Route path="/character/:charId" element={<CharacterScreen />} />
          {/* <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/hero/:heroeId" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default DashBoardRoutes;
