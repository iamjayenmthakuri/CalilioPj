import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashbord from "./pages/Dashbord";

import Contact from "./pages/Contact";
import Bulksms from "./pages/Bulksms";
import Overview from "./SettingComponent/Overview";
import SettingSidebarLayout from "./layouts/SettingSidebarLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashbord />} />
          <Route path="setting" element={<SettingSidebarLayout />}>
            <Route path="overview" element={<Overview />}></Route>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="bulksms" element={<Bulksms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
