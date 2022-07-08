import { Routes, Route } from "react-router-dom";
import BetterCallSaul from "../components/Better Call Saul/BetterCallSaul";
import BreakingBadScreen from "../components/Breaking Bad/BreakingBad";
import CharacterScreen from "../components/Character/CharacterScreen";
import { SearchScreen } from "../components/search/SearchScreen";
// import DcScreen from "../components/dc/DcScreen";
// import HeroScreen from "../components/hero/HeroScreen";
// import MarvelScreen from "../components/marvel/MarvelScreen";
import NavBar from "../ui/NavBar";

const DashBoardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <Routes>
          <Route path="/" element={<BreakingBadScreen />} />
          <Route path="/breaking-bad" element={<BreakingBadScreen />} />
          <Route path="/better-call-saul" element={<BetterCallSaul />} />
          <Route path="/character/:charId" element={<CharacterScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashBoardRoutes;
