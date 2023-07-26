import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHomePage } from "../pages/Home_page";
import { HotelsListPage } from "../pages/HotelListPage";
import MainHotelPage from "../pages/MainHotelPage";
import { SignInPage } from "../pages/SignIn_Page";
import { SignUpPage } from "../pages/SignUp_Page";

export function RoutesPage() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainHomePage />} />
        <Route exact path="/hotels" element={<HotelsListPage />} />
        <Route exact path="/hotels/:id" element={<MainHotelPage />} />
        <Route exact path="/element" component={<SignInPage />} />
        <Route exact path="/signUp" element={<SignUpPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
