import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
export default function Otp() {
  const [n1, setn1] = useState("");
  const [n2, setn2] = useState("");
  const [n3, setn3] = useState("");
  const [n4, setn4] = useState("");

  const getotp = async () => {
    const otp = n1 + n2 + n3 + n4;
    console.log(otp);
    try {
      const apicall = await axios.post(
        "https://oohrtransportserver.onrender.com/api/verify",
        {
          otp,
        }
      );
      //  console.log(apicall.json());
    } catch (err) {
      console.log(`error occurred:${err}`);
    }
  };

  //   useEffect(() => {
  //     getotp();
  //   }, []);
  return (
    <div className="text-center text-bold mx-auto my-[2rem]">
      <div className="text-center mx-[0.5rem] font-bold text-[1.5rem] medium:text-[2rem] ">
        OTP VERIFICATION
      </div>
      <div className="   my-[1rem] flex justify-center flex-wrap">
        <div className="flex  justify-evenly w-11/12 ">
          <div className=" min-w-[10vw] w-[25vw] mx-[1rem] w-6/12 text-center py-[0.2rem]  h-[100%] border-2   shadow-md">
            <input
              type="text"
              className="text-center"
              maxLength="1"
              value={n1}
              onChange={(e) => setn1(e.target.value)}
            />
          </div>
          <div className="  min-w-[10vw] w-[25vw] mx-[1rem] w-6/12 text-center py-[0.2rem]  h-[100%] border-2 shadow-md">
            <input
              type="text"
              className="text-center"
              maxLength="1"
              value={n2}
              onChange={(e) => setn2(e.target.value)}
            />
          </div>

          <div className="  min-w-[10vw] w-[25vw] mx-[1rem]  w-6/12 text-center py-[0.2rem] h-full border-2 shadow-md">
            <input
              type="text"
              className="text-center"
              maxLength="1"
              value={n3}
              onChange={(e) => setn3(e.target.value)}
            />
          </div>
          <div className="  min-w-[10vw] w-[25vw] mx-[1rem] w-6/12 text-center py-[0.2rem] h-full border-2 shadow-md">
            <input
              type="text"
              className="text-center"
              maxLength="1"
              value={n4}
              onChange={(e) => setn4(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="">
        <Link to="/home">
          <button
            className="px-[1.5rem] py-[0.5rem] text-[1.1rem] bg-blue-500 hover:bg-blue-400 "
            onClick={getotp}
          >
            Verify
          </button>
        </Link>
        <div className=" ml-auto flex mt-[2rem] text-blue-600 justify-center">
          <div className="pr-[5px]">Resend otp ? </div>
          <div className="text-black px-[0.5rem] ">OR</div>
          <Link to="/Signinpage">
            <div> change the credentials</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
