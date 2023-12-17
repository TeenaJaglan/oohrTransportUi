import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children, loggedin }) {
  const nav = useNavigate();
  console.log("private route");
  console.log(loggedin);
  return loggedin ? children : nav("/SigninPage");
}
