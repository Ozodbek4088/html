import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tests from "./pages/Testlar/Tests";
import TestAdmin from "./pages/Testlar/TestAdmin";
import EditTests from "./pages/EditTests/EditTests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/tests" element={<Tests />} />
        <Route path="/testAdmin" element={<TestAdmin />} />
        <Route path="/editTests/:id" element={<EditTests />} />
      </Routes>
    </div>
  );
}

export default App;
