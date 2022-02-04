import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import CreateProjet from "./components/CreateProjet";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/new-projet" element={<CreateProjet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
