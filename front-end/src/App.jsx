import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Admin from "./components/Admin";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
