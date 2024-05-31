import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

import "./App.css";
import { login } from "./redux/action/ActionSession";
import { useDispatch } from "react-redux";

function App() {
  const dispath = useDispatch();
  useEffect(() => {
    const action = login(localStorage.getItem("user"));
    dispath(action);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
