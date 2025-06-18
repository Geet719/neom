import "./App.css";
import MyModal from "./Components/Modals/MyModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFavrouites from "./Pages/MyFavrouites";
import DashBoard from "./Pages/DashBoard";
import ProfilePage from "./Pages/ProfilePage";
import UpComming from "./Pages/UpComming";
import FeedBackPage from "./Pages/FeedBackPage";
import SettingsPage from "./Pages/SettingsPage";
import CommonPage from "./Components/CommonPage/CommonPage";
import VibeMeter from "./Components/Modals/VibeMeter";
import ReschedulePage from "./Pages/ReschedulePage";
import LoginPage from "./Pages/LoginPage";
import { useSelector } from "react-redux";
import SignInPage from "./Pages/SignInPage";
import LoaderPage from "./Pages/LoaderPage";
import store from "../Store";
import { getAllUserData } from "./Features/User/UserSlice";
import { useEffect } from "react";
import PaymentSuccessful from "./Pages/PaymentSuccesful";
import PaymentFailed from "./Pages/PaymentFailed";
import ScrollToTop from "./Components/Scroll/ScrolToTop";
import ClientForm from "./Pages/ClientForm";

function App() {
  const userDetails = useSelector((store) => store.user);
  console.log(userDetails);

  const { loading, authorized } = userDetails;

  function loginHandlebyGoogle() {
    window.location.href = "https://neom-sgf7.onrender.com/auth/google";
  }

  useEffect(() => {
    store.dispatch(getAllUserData());
  }, []);

  return (
    <div
      style={{ background: "#F9F7F2 0% 0% no-repeat padding-box" }}
      className="overflow-x-hidden"
    >
      <BrowserRouter>
        <div className="app">
          <ScrollToTop />
          <Routes>
            <Route
              index
              element={
                loading ? (
                  <LoaderPage />
                ) : authorized === false ? (
                  <LoginPage loginHandlebyGoogle={loginHandlebyGoogle} />
                ) : (
                  <DashBoard />
                )
              }
            />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="favourites" element={<MyFavrouites />} />
            <Route path="modal" element={<MyModal />} />
            <Route path="edit-profile" element={<ProfilePage />} />
            <Route path="events" element={<UpComming />} />
            <Route path="feedback" element={<FeedBackPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="details2/eventId/:id" element={<CommonPage />} />
            <Route path="vibe" element={<VibeMeter />} />
            <Route path="schedule" element={<ReschedulePage />} />
            <Route path="SignIn" element={<SignInPage />} />
            <Route path="success" element={<PaymentSuccessful />} />
            <Route path="fail" element={<PaymentFailed />} />
            <Route path="form" element={<ClientForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
