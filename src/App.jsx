import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Maintenance from "./pages/Maintenance";
import Complaints from "./pages/Complaints";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/complaints" element={<Complaints />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;