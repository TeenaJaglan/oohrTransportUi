import React from "react";
import Signin from "./Signin";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SigninPage() {
  const { identity, setidentity } = useContext(AuthContext);
  const [property, setproperty] = useState(0);
  return (
    <div className="flex flex-col mt-2 justify-center border-4 border-bg-grey-900  m-auto mb-2  px-[0.2rem] medium:w-[80%] w-[95%]  p-[1rem]">
      <div className="flex   justify-center font-bold font-[8rem]">SIGN UP</div>
      <div className="flex flex-wrap m-[1rem] rounded-[4px] justify-center   ">
        <div className="border-[3px] rounded-[8px] border-bg-black flex ">
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
      {identity === "parent" ? (
        <Signin identity={identity} />
      ) : (
        <Signin identity={identity} />
      )}
    </div>
  );
}
