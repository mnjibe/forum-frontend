import * as React from "react";
import axios from "axios";
import { axiosInstance as authentication } from "../service/axios";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

export default function Comments(props) { 

  const navigate = useNavigate;

  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  var decodedHeader = jwt_decode(token, { header: true });
  const [comments, setComments] = React.useState([]);
  const [editMode, setEditMode] = useState({ edit: false, commentId: null });
  const [commentsAndUsers, setCommentsAndUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/posts/${props.post._id}/comments`)
      .then((res) => {
        console.log("Pulling Comments Frm::: ", res.data.data);
        const allComments = res.data.data;
        setComments(allComments);
      })
      .catch((err) => console.log("err::  ", err));
  }, []);

  React.useEffect(() => {
    if (comments.length > 0) {
      const allCommentUsers = comments.map((comment) =>
        axios.get(`${process.env.REACT_APP_URL}/api/v1/users/${comment.user}`)
      );
      Promise.all(allCommentUsers)
        .then((res) => {
          const commentsWithUsers = res.reduce((acc, currentVal) => {
            const commentData = currentVal.data.data;
            const userComment = comments.find(
              (c) => c.user === commentData._id
            );
            if (userComment)
              acc.push({ ...userComment, name: commentData.name });
            return acc;
          }, []);
          setCommentsAndUsers(commentsWithUsers);
        })
        .catch((err) => console.log("err::  ", err));
    }
  }, [comments]);

  const deleteComment = (commentId) => {
    authentication.delete(`${process.env.REACT_APP_URL}/api/v1/comments/${commentId}`);
    console.log("DELETING");
    window.location.reload();
  };

  const editComment = (commentId) => {
    setEditMode({ edit: true, commentId });
  };

  const cancelEdit = () => {
    setEditMode({ edit: false, commentId: null });
  };
  const [text, setText] = React.useState("");
  const updateComment = (commentId,e) => { 
      authentication
        .put(`${process.env.REACT_APP_URL}/api/v1/comments/${commentId}`, {
          text,
        })
        .then((res) => { 
          console.log("Updating:::  ", res.data.data); 
          window.location.reload();
        })
        .catch((err) => console.log("err::  ", err));
    console.log("Updating");
  };
  return (
    <div>
      {commentsAndUsers?.map((comment) => (
        <>
          <Typography>
            {" "}
            <h3>
              {" "}
              {!editMode.edit ? (
                `${comment.name}: ${comment.text}`
              ) : (
                <>
                  <TextField fullWidth value={text} onChange={(e) => setText(e.target.value)}></TextField>
                  <Button  variant = "body2" onClick={() => updateComment(comment._id)}>
                    Update
                  </Button>
                  <Button variant = "body2" onClick={cancelEdit}>Cancel</Button>
                </>
              )}
              {decoded.id === comment.user && !editMode.edit && (
                <>
                  <Button variant = "body2" onClick={() => editComment(comment._id)}>Edit</Button>
                  <Button variant = "body2" onClick={() => deleteComment(comment._id)}>
                    Delete
                  </Button>
                </>
              )}
            </h3>{" "}
          </Typography>
        </>
      ))}
    </div>
  );
}
