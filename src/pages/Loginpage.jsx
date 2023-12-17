import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
export default function LoginPage() {
  const {
    setloggedin,
    identity,
    setidentity,
    emailaddress,
    setemailaddress,
    logindetails,
    backendloginconnection,
  } = useContext(AuthContext);

  const [property, setproperty] = useState(0);
  const [type, settype] = useState("password");
  const [password, setpassword] = useState("");
  const [pass, setpass] = useState(false);
  const nav = useNavigate();

  const rolechoosen = async (event) => {
    event.preventDefault();
    console.log(identity);
    console.log(emailaddress);
    console.log(password);
    setloggedin(true);
    logindetails(identity, emailaddress, password);
    try {
      await backendloginconnection(identity, emailaddress, password);
    } catch (error) {
      console.error("Error during login:", error);
    }

    nav("/available-drivers");
  };

  return (
    <div className=" flex flex-col">
      <div className="flex flex-col mt-2 justify-center border-4 border-bg-grey-900  m-auto mb-2  px-[0.2rem] medium:w-[80%] w-[95%]  p-[1rem]">
        <div className="flex flex-col   relative font-bold fontsize-[30px]  justify-center items-center">
          LOG IN
        </div>
        <form
          className="flex  flex-wrap flex-col justify-center items-center"
          onSubmit={(e) => rolechoosen(e)}
        >
          <div className="flex flex-wrap   flex-col  md:flex-row my-[0.5rem] rounded-[4px] justify-center   ">
            <div className="border-[3px] rounded-[8px] border-bg-black flex">
              <div
                className={
                  property === 1
                    ? "bg-yellow-400 px-[0.5rem] rounded-l-[8px]  rounded-r-[12px]  border-bg-yellow-900"
                    : " px-[0.5rem]  cursor-pointer rounded-l-[8px]  "
                }
                onClick={() => {
                  setproperty(1);
                  setidentity("parent");
                }}
              >
                Parent
              </div>
              <div
                className={
                  property === -1
                    ? "bg-yellow-400 px-[0.5rem] rounded-r-[8px] rounded-l-[12px] border-bg-yellow-900"
                    : " px-[0.5rem]   cursor-pointer rounded-r-[8px]  "
                }
                onClick={() => {
                  setproperty(-1);
                  setidentity("driver");
                }}
              >
                Driver
              </div>
            </div>
          </div>

          <div className="flex  flex-col flex-wrap items-center px-[0.5rem] justify-center w-full">
            <div className="flex  items-center  ml-[0.5rem] flex-wrap justify-start md:justify-between ">
              <label htmlFor="">
                Email Address<span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                className="flex  flex-col  border-black hover:border-b-2 hover:border-black w-10/12"
                value={emailaddress}
                required
                onChange={(event) => setemailaddress(event.target.value)}
              />
            </div>

            <div className="flex items-center flex-wrap justify-start  md:justify-between  ">
              <label htmlFor="">
                Password<span className="text-red-700">*</span>
              </label>
              <input
                type={type}
                className=" flex flex-col   border-black w-10/12 hover:border-b-2 hover:border-black  relative"
                value={password}
                required
                onChange={(event) => setpassword(event.target.value)}
              />
              <div className="relative right-[-4.8rem] top-[-1.4rem] small:right-[0.8rem] small:top-0 bg-white w-[1.5rem] h-[1.3rem] flex justify-center items-center">
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
          </div>
          <div>
            <button
              type="submit"
              className="bg-yellow-400 px-[0.5rem] w-[80px] m-[2rem] "
              onSubmit={(e) => rolechoosen(e)}
            >
              SUBMIT
            </button>
          </div>

          <div className="flex justify-evenly w-3/12">
            <div className="border-[0.2px] pl-[1.2rem]   border-black w-5/12 h-[1px]"></div>
            <div className="relative bottom-[0.75rem]">OR</div>
            <div className="border-[0.2px] pr-[1.2rem] border-black  w-5/12  h-[1px] "></div>
          </div>
        </form>
        <div className="flex flex-col justify-center">
          <Link to="" className="flex   justify-center">
            <button
              type="submit"
              className="bg-yellow-400  items-center justify-center flex px-[1rem] mx-[0.5rem] w-auto py-[0.7rem] mb-[1rem] rounded-3"
            >
              <FcGoogle size={25} className="mr-[15px] " />
              <p>Continue with Google</p>
            </button>
          </Link>

          <div className="flex w-full justify-center">
            <div className="flex justify-evenly w-3/12">
              <div className="border-[0.2px] pl-[1.2rem]   border-black w-5/12 h-[1px]"></div>
              <div className="relative bottom-[0.75rem]">OR</div>
              <div className="border-[0.2px] pr-[1.2rem] border-black  w-5/12  h-[1px] "></div>
            </div>
          </div>
          <Link to="" className="flex  justify-center">
            <button
              type="submit"
              className="bg-blue-600 items-center justify-center items-center flex px-[1rem] mx-[0.5rem] w-auto py-[0.7rem] mb-[1rem] rounded-3"
            >
              <FaFacebookF size={22} className="mr-[8px] blue-icon text-blue" />
              <p>Continue with Facebook</p>
            </button>
          </Link>
          <div className="flex w-full justify-center">
            <div className="flex justify-evenly w-3/12">
              <div className="border-[0.2px] pl-[1.2rem]   border-black w-5/12 h-[1px]"></div>
              <div className="relative bottom-[0.75rem]">OR</div>
              <div className="border-[0.2px] pr-[1.2rem] border-black  w-5/12  h-[1px] "></div>
            </div>
          </div>
          <Link
            to="/SigninPage"
            className="flex justify-center relative mb-[0.5rem] text-blue-500 my-[0.5rem] px-[1rem]"
          >
            Do not have any account ?
          </Link>
        </div>
      </div>
    </div>
  );
}
