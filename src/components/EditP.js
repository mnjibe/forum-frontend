import  Button  from "@mui/material/Button";

export default function EditP(props) {
  return (
    <Button variant = "body2" component = "a" href={`/editpost/${props.post._id}`}>
      Edit 
    </Button>
  );
}
