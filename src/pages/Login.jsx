import React from "react";
import { Link } from "react-router-dom";
import SignupPage from "./signupPage";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthContextProvider from "../context/AuthContext";
export default function Login(props) {
  const identityproof =
    props.identity === "Parent"
      ? "Relation with the Child"
      : "Identity Proof(can be Driver License/Aadhar card)";
  const {
    loggedin,
    setloggedin,
    identity,
    setidentity,
    emailaddress,
    setemailaddress,
    setpassword,
    password,
    phonenumber,
    setphonenumber,
    numberofchild,
    setnumberofchild,
    name,
    setname,
    confirmpassword,
    setconfirmpassword,
    address,
    setaddress,
    Parentlogindetails,
  } = useContext(AuthContext);

  const [property, setproperty] = useState(0);
  const [type, settype] = useState("password");
  const [pass, setpass] = useState(false);

  function rolechoosen(event) {
    event.preventDefault();
    setloggedin(true);
    console.log(identity);
    console.log(optionalphonenumber);
    console.log(address);

    Parentlogindetails(
      identity,
      emailaddress,
      password,
      confirmpassword,
      phonenumber,
      numberofchild,
      address
    );
  }
  return (
    <div>
      <form className="bg-pink-900 items-justify m-[1rem] p-[1rem] flex flex-col flex-wrap justify-center items-center sm:w-11/12 overflow-scroll  w-full mx-auto ">
        <div
          className="flex flex-row flex-wrap bg-red-900 rounded-[4px] justify-center items-center"
          required="true"
        >
          <div
            className={
              property === 1
                ? "bg-yellow-400 px-[0.75rem] mr-[0.5rem] border- border-bg-yellow-900"
                : " px-[0.75rem] mr-[0.5rem] cursor-pointer  "
            }
            onClick={() => {
              setproperty(1);
              setidentity("Parent");
            }}
          >
            Parent
          </div>
          <div
            className={
              property === -1
                ? "bg-yellow-400 px-[0.5rem]  border-bg-yellow-900"
                : " px-[0.75rem] mr-[0.5rem]  cursor-pointer "
            }
            onClick={() => {
              setproperty(-1);
              setidentity("Driver");
            }}
          >
            Driver
          </div>
        </div>

        <div className="flex flex-col bg-yellow-500 m-[1.5rem] w-11/12 justify-center items-center">
          <div className="flex my-[0.5rem]  justify-center">
            <label className="my-[0.5rem]">
              Email Address<span className="text-red-700">*</span>
              <input
                type="email"
                required="true"
                value={emailaddress}
                onChange={(event) => setemailaddress(event.target.value)}
                className="ml-auto  border-black flex flex-col border-black hover:border-b-[2px] hover:border-black border-b-[1.5px]"
              />
            </label>
          </div>

          <div className=" my-[0.5rem] flex  justify-center ">
            <label className="my-[0.5rem]   ">
              Password <span className="text-red-700">*</span>
              <input
                type={type}
                className="relative flex flex-col border-black  hover:border-b-[2px] hover:border-black border-b-[1.5px]  justify-center "
                value={password}
                onChange={(event) => setpassword(event.target.value)}
              />
            </label>
            <div className="relative left-[10rem] bottom-[1.4rem] bg-white w-[1.5rem] h-[1.3rem] flex justify-center items-center">
              {pass === true ? (
                <IoEyeSharp
                  onClick={() => {
                    setpass(!pass);
                    settype("password");
                  }}
                />
              ) : (
                <IoEyeOff
                  onClick={() => {
                    setpass(!pass);
                    settype("text");
                  }}
                />
              )}
            </div>
          </div>

          <div className=" my-[0.5rem] bg-pink-400 flex  justify-center ">
            <label className="my-[0.5rem] ">
              {" "}
              Confirm Password <span className="text-red-700">*</span>
              <input
                type={type}
                className="relative flex flex-col border-black  hover:border-b-[2px] hover:border-black border-b-[1.5px]  "
                value={confirmpassword}
                onChange={(event) => setconfirmpassword(event.target.value)}
              />
            </label>
            <div className="relative left-[10rem] bottom-[1.4rem] bg-white w-[1.5rem] h-[1.3rem] flex justify-center items-center">
              {pass === true ? (
                <IoEyeSharp
                  onClick={() => {
                    setpass(!pass);
                    settype("password");
                  }}
                />
              ) : (
                <IoEyeOff
                  onClick={() => {
                    setpass(!pass);
                    settype("text");
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex my-[0.5rem]  flex justify-center">
            <label className="my-[0.5rem]">
              Phone Number<span>*</span>
              <input
                type="text"
                required="true"
                value={phonenumber}
                onChange={(event) => setphonenumber(event.target.value)}
                className="ml-auto flex flex-col border-black hover:border-b-[2px] hover:border-black border-b-[1.5px]"
              />
            </label>
          </div>

          <div className="flex my-[0.5rem]  justify-center">
            <label className="my-[0.5rem]">
              Numberofchild<span className="text-red-700">*</span>
              <input
                type="text"
                required="true"
                className=" flex flex-col  border-black hover:border-b-[2px] hover:border-black border-b-[1.5px]"
                onChange={(event) => setnumberofchild(event.target.value)}
                value={numberofchild}
              />
            </label>
          </div>

          <div className="flex my-[0.5rem] justify-center">
            <label className="my-[0.5rem]">
              Residential Address<span className="text-red-700">*</span>
              <textarea
                className="  flex flex-col ml-[0.4rem] border-black relative hover:border-b-[2px] w-8/12 hover:border-black border-b-[1.5px] "
                required="true"
                onChange={(event) => setaddress(event.target.value)}
              />
            </label>
          </div>

          <div className="flex justify-center my-[0.5rem]">
            <label className="my-[0.5rem]">
              {identityproof} <span className="text-red-700">*</span>
              <input
                type="file"
                className=" flex flex-col ml-[0.4rem] w-8/12  "
                required="true"
              />
            </label>
          </div>
        </div>
        <Link to="/available-drivers">
          <button
            onSubmit={(e) => rolechoosen(e)}
            className="  w-[75px] hover:w-[80px] p-[4px] px-[8px] border-black bg-white border-[3px]"
          >
            submit
          </button>
        </Link>
      </form>
    </div>
  );
}
