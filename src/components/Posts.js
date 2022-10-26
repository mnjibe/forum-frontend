import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Posts(props) {
  return (
    <Link to={`/view/${props.post._id}`}>
      <div> {props.post.title} </div>
    </Link>
  );
}
