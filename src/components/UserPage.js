import * as React from "react";
import { axiosInstance as axios } from "../service/axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import "fontsource-roboto";
import { Tab, Tabs, Button, ButtonGroup } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link, Navigate, useNavigate } from "react-router-dom"; 


const UserPage = () => { 
  const navigate = useNavigate();
  //Gets Current User
  const [user, setUser] = useState("");
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/api/v1/auth/me`)
    .then((res) => {
      setUser(res.data.data);
      console.log("Pulling:::  " , res.data.data)
    }) 
    .catch((err) => console.log("err::  ", err));
  }, []);
  //Change Username 
  const [name, setName] = useState("")
  const changeUsername = (e) => {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_URL}/api/v1/auth/updatedetails`, {
        name,
        email : `${user.email}`
      })
      .then((res) => { 
        console.log("Changing:::  ", res.data.data);
        navigate("/userpage");
        window.location.reload();
      })
    }
  //Change Email
  
    return( 
      <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "-40px" }}
    >
      <Toolbar />
      <Typography>
        <h1> Welcome {user.name} </h1>
      </Typography>
      <Divider />
      <Stack spacing={2}>
        <Typography>
          <h3> Edit Your Account </h3>
        </Typography>
        <Button 
        variant="body2"
        color ="primary"
        component="a"
        href="/changepw"
        >
          Click Here to Change Password

        </Button>
        <Divider />
        <form noValidate>
          <Typography>
            <h4> Account Information</h4>
            <Divider />
            <h5> UserName ................ {user.name} </h5>
            <TextField 
            variant= "outlined"
            label = "New Username"
            value = {name}
            onChange={(e) => setName(e.target.value)}
            />
            <Button 
            variant = "body2"
            onClick = {changeUsername}>
              Change Username
            </Button> 

            <Divider />
            <h5> Email ................ {user.email}  </h5>
            <TextField 
            variant= "outlined"
            label = "New Email"
            />
            <Button 
            variant = "body2"
            >
              Change Email
            </Button>
            <Divider />
            <Button 
            sx={{marginTop: "20px"}}
            fullWidth
            variant = "body2"
            component = "a"
            href={`/users/${user._id}/posts`}>
              See My Posts
            </Button>
          </Typography>
        </form>
      </Stack>
    </Box>
        );
};
export default UserPage;