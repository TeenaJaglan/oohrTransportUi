import { createContext, useContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loggedin, setloggedin] = useState(false);
  const [emailaddress, setemailaddress] = useState("");
  const [identity, setidentity] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [numberofchild, setnumberofchild] = useState("");
  const [name, setname] = useState([]);

  const [address, setaddress] = useState("");
  const backendUrl = "https://oohrtransportserver.onrender.com"; // Backend URL

  const backendloginconnection = async (iden, email, password) => {
    try {
      const response = await axios.post(`${backendUrl}/api/login/${iden}`, {
        email,
        password,
      });
      console.log(response.data);
      setloggedin(true); // Set the loggedin state to true upon successful login
      console.log("success");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const backendsignupconnection = async (
    iden,
    name,
    email,
    phone,
    password
  ) => {
    try {
      const response = await axios.post(`${backendUrl}/api/signup/${iden}`, {
        name,
        email,
        phone,
        password,
      });
      console.log(response.data);
      setloggedin(true); // Set the loggedin state to true upon successful login
      console.log("success");
    } catch (error) {
      console.error("Error during SigUp:", error);
    }
  };

  const value = {
    loggedin,
    setloggedin,
    emailaddress,
    setemailaddress,
    phonenumber,
    setphonenumber,
    numberofchild,
    setnumberofchild,
    signupdetails,
    identity,
    setidentity,
    backendloginconnection,
    name,
    setname,
    address,
    setaddress,
    signupdetails,
    logindetails,
    backendsignupconnection,
  };
  function logindetails(iden, email, passkey) {
    console.log("login function called");
    setloggedin(true);
    console.log(value);
  }
  function signupdetails() {
    console.log(" signup function call");
    setloggedin(true);
    // setidentity(iden);
    // setemailaddress(email);
    // setpassword(passkey);
    // setphonenumber(pno_);
    // setoptionalphonenumber(optionalpno_); // Update optional phone number
    // setaddress(residential_address); // Update residential address
    // setnumberofchild(no_of_child);
    console.log(value);
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
