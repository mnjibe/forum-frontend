import * as React from "react";
import axios from "axios";
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
import "./App.css";
import "fontsource-roboto";
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from "react-router-dom";

function App() {

  axios.get("http://localhost:6006/api/v1/auth/me")
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
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
          <Route path="/checkemail" element={<CheckEmail />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/changepw" element={<ChangePW />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

const ResetPassword1 = () => {
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if (!id) {
            // Send user away from this page
        } else {
            // Validate the id - call the server to check that this id is valid and that the user initiated it
            // if valid, do nothing, otherwise you send user away
        }
    }, []);
    return (
        <>
        {/* new password and confirm password fields and button */}
        </>
    )
}
