import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashbord from "./pages/Dashbord";

import Contact from "./pages/Contact";
import Bulksms from "./pages/Bulksms";
import Overview from "./SettingComponent/Overview";
import SettingSidebarLayout from "./layouts/SettingSidebarLayout";
import Mynumber from "./SettingComponent/Mynumber";
import Blocklist from "./SettingComponent/Blocklist";
import Member from "./SettingComponent/Member";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashbord />} />
          <Route path="setting" element={<SettingSidebarLayout />}>
            <Route path="overview" element={<Overview />} />
            <Route path="mynumber" element={<Mynumber />} />
            <Route path="blocklist" element={<Blocklist />} />
            <Route path="member" element={<Member />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="bulksms" element={<Bulksms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
