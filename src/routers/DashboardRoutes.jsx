import { Routes, Route } from "react-router-dom";
import BetterCallSaul from "../components/Better Call Saul/BetterCallSaul";
import BreakingBadScreen from "../components/Breaking Bad/BreakingBad";
import CharacterScreen from "../components/Character/CharacterScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import NavBar from "../ui/NavBar";

const DashBoardRoutes = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center pt-4">
        <NavBar />
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
