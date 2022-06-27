import { Routes, Route } from "react-router-dom";
import BreakingBadScreen from "../components/Breaking Bad/BreakingBadScreen";
// import DcScreen from "../components/dc/DcScreen";
// import HeroScreen from "../components/hero/HeroScreen";
// import MarvelScreen from "../components/marvel/MarvelScreen";
import NavBar from "../ui/NavBar";

const DashBoardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<BreakingBadScreen />} />
          <Route path="/breaking-bad" element={<BreakingBadScreen />} />
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
