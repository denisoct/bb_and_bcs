import { Routes, Route } from "react-router-dom";
import LoginScreen from "../components/Login/LoginScreen";
import DashBoardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashBoardRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
