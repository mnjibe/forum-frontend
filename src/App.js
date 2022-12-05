import * as React from "react";
import { axiosInstance as axios } from "./service/axios";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ViewPosts from "./components/ViewPost";
import CreatePost from "./components/CreatePost";
import SignIn from "./components/SignIn";
import DisplayPosts from "./components/DisplayPosts";
import DisplayUsers from "./components/DisplayUsers";
import SignUp from "./components/SignUp";
import ForgotPW from "./components/ForgotPW";
import AllPosts from "./components/AllPosts";
import ResetPassword from "./components/ResetPassword"
import CheckEmail from "./components/CheckEmail";
import UserPage from "./components/UserPage";
import ChangePW from "./components/ChangePW";
import EditPost from "./components/EditPost"
import DEBUTTON from "./components/DEButton";
import AccountCreated from "./components/AccountCreated";
import "./App.css";
import "fontsource-roboto";
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from "react-router-dom";

function App() {

  axios.get(`${process.env.REACT_APP_URL}/api/v1/auth/me`)
  .then((res) => {
    if(res);
    console.log("Pulling:::  " , res.data.data)
  })
  return (
    <div>
      <Sidebar/>

      <Router>
        <Routes>
          <Route path="/" element={<DisplayPosts />} />
          <Route path="/allquestions" element={<DisplayPosts />} />
          <Route path="/view/:id" element={<ViewPosts />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/users" element={<DisplayUsers />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset" element={<ForgotPW />} />
          <Route path="/users/:userId/posts" element={<AllPosts />} />
          <Route path="/resetpassword/" element={<ResetPassword />} />
          <Route path="/checkemail" element={<CheckEmail />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/changepw" element={<ChangePW />} />
          <Route path="/editpost/:id" element={<EditPost/>} />
          <Route path="/accreated" element={<AccountCreated/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

