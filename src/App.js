import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

import "./App.css";
import { login } from "./redux/action/ActionSession";
import { useDispatch } from "react-redux";
import Posts from "./pages/post/Posts";

function App() {
  const dispath = useDispatch();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      const action = login(user);

      dispath(action);
    }
  }, [user]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
