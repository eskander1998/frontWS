import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import DashboardPage from "./pages/DashboardPage";

import TypographyPage from "./pages/TypographyPage";
import LoginPage from "./pages/auth/LoginPage";
import ResetPassword from "./pages/auth/ResetPassword";
import ProfilePage from "./pages/profile/ProfilePage";

import ChangePasswordPage from "./pages/profile/ChangePasswordPage";
import UserPreferencesPage from "./pages/profile/UserPreferencesPage";
import AdminBlankPage from "./pages/AdminBlankPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CasseAuto from "./pages/CasseAuto";
import GetEtat from "./pages/GetEtat";
import GetMaisonVoiture from "./pages/GetMaisonVoiture";
import GetDiagnostiqeur from "./pages/GetDiagnostiqeur";
import GetMecanicien from "./pages/GetMecanicien";
import GetVendeur from "./pages/GetVendeur";
import GetGarage from "./pages/GetGarage";
import Hautegame from "./pages/Hautegame";
import GetMarque from "./pages/GetMarque";
import GetVehicules from "./pages/GetVehicules";
import GetOption from "./pages/GetOption";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/casseauto" element={<CasseAuto />} />
        <Route exact path="/getEtat" element={<GetEtat />} />
        <Route exact path="/getMaisonVoiture" element={<GetMaisonVoiture/>} />
        <Route exact path="/getDiagnostiqeur" element={<GetDiagnostiqeur />} />
        <Route exact path="/GetMecanicien" element={<GetMecanicien />} />
        <Route exact path="/GetVendeur" element={<GetVendeur />} />
        <Route exact path="/GetGarage" element={<GetGarage />} />
        <Route exact path="/Hautegame" element={<Hautegame />} />
        <Route exact path="/GetMarque" element={<GetMarque />} />
        <Route exact path="/GetVehicules" element={<GetVehicules />} />
        <Route exact path="/GetOption" element={<GetOption />} />
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/change-password" element={<ChangePasswordPage />} />
        <Route exact path="/preferences" element={<UserPreferencesPage />} />
        <Route exact path="/typography" element={<TypographyPage />} />
        <Route exact path="/blank-page" element={<AdminBlankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
