import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashbord from "./pages/Dashbord";
import Setting from "./pages/Setting";
import Contact from "./pages/Contact";
import Bulksms from "./pages/Bulksms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashbord />} />
          <Route path="setting" element={<Setting />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bulksms" element={<Bulksms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
