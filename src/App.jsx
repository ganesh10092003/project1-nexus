import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";
import SignUpCard from "./components/SignUpCard";

const App = () => {
  return (
    <Router>
      <div className="flex overflow-hidden w-screen h-screen bg-gradient-to-r from-black to-[rgb(50,50,50)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginCard />} />
          <Route path="/signup" element={<SignUpCard />} />
        </Routes>
      </div>
    </Router>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);