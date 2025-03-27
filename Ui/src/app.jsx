import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginRoute from "./routes/login";
import RegisterRoute from "./routes/register";
import RootRoute from "./routes/root";
import VerifyRoute from "./routes/verify";
import UnverifiedRoute from "./routes/unverified";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};
body{
  font-family: 'Poppins', sans-serif;
  fon-weight: 400;
  font-style: normal;
}
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/register" element={<RegisterRoute />} />
        <Route path="/unverified" element={<UnverifiedRoute />} />
        <Route path="/verify/:token" element={<VerifyRoute />} />
        <Route path="/" element={<RootRoute />} />
      </Routes>
    </>
  );
};
export default App;
