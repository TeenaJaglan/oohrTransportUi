import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAuthContext from "../context/AuthContext";
import SignupPage from "../pages/signupPage";

const AuthProvider = () => {
  const [driver, setdriver] = useState({});
  const [parent, setParent] = useState({});
  return (
    <AuthContextProvider>
      <SignupPage/>
    </AuthContextProvider>
  );
};

export default AuthProvider;
