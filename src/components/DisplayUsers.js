import * as React from "react";
import axios from "axios";
import "fontsource-roboto";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import Mock from "../data/Mock.json";
import {
  Typography,
  Toolbar,
  Box,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const DisplayUsers = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/users`)
      .then((res) => {
        console.log("Pulling From::  ", res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log("err::  ", err));
  }, []);
  const arr = users.map((user, index) => {
    return (
      <tr>
        <td>
          <Divider />
          <h3>
            <Link to={`/users/${user._id}/posts`}>{user.name}</Link>
          </h3>
        </td>
        <td>
          <h5>{user.role}</h5>
        </td>
      </tr>
    );
  });
  const navigate = useNavigate();
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "-40px" }}
    >
      <Toolbar />
      <Stack spacing={2}>
        <Typography>
          <h1> All Users </h1>
        </Typography>
        <Button
          sx={{}}
          variant="outlined"
          size="medium"
          color="secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          Return to All Questions
        </Button>
        <Divider />
        <Typography>
          <table>
            <tr>
              <th>
                {" "}
                <h2>User Name & Role</h2>
              </th>
              <th>
                {" "}
                <h2></h2>
              </th>
            </tr>
            {arr}
          </table>
        </Typography>
      </Stack>
    </Box>
  );
};
export default DisplayUsers;
