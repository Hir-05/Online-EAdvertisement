// import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/common/LandingPage";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import AdvertiserDashboard from "./components/advertiser/AdvertiserDashboard";
import AdminDashboard from "./components/admin/AdminDasboard";
import UserDashboard from "./components/user/UserDashboard";
import Gallery from "./components/layouts/Gallery";
import Blogs from "./components/layouts/Blogs";

function App() {
   
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/advertiser/AdvertiserDashboard" element={<AdvertiserDashboard />}></Route>
        <Route path="/admin/AdminDashboard" element={<AdminDashboard />}></Route>
        <Route path="/user/UserDashboard" element={<UserDashboard />}></Route>
        <Route path="/layouts/Gallery" element={<Gallery />}></Route>
        <Route path="/layouts/Blogs" element={<Blogs />}></Route>
      </Routes>
      </>
  )
}

export default App
