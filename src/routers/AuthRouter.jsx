import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "../pages/auth/LoginScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import "../pages/auth/auth.css"

const AuthRouter = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/auth/register" element={<RegisterScreen />} />
        <Route path="/auth/login" element={<LoginScreen />} />

        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </main>
  );
};
export default AuthRouter;
