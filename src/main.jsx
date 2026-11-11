import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import './styles.css'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import OtherProfile from "./pages/OtherProfile";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import Logout from "./pages/Logout";
import Friends from "./pages/Friends";
import Search from "./pages/Search";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileID" element={<OtherProfile />} />
      <Route path="/following" element={<Following />} />
      <Route path="/followers" element={<Followers />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/followingPosts" element={<Friends />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>,
);
