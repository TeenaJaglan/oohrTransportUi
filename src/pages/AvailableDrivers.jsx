import React from "react";
import { FaStar } from "react-icons/fa";
export default function AvailableDrivers() {
  const Driver = {
    name: "xysz",
    phonenumber: 9302345678,
    rating: 4.5,
    image:
      "https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  };
  const Driver2 = {
    name: "xvvysz",
    phonenumber: 9302345678,
    rating: 4.5,
    image:
      "https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  };
  const Driver3 = {
    name: "xyvvsz",
    phonenumber: 9302345678,
    rating: 4.5,
    image:
      "https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  };
  const Driverlist = [Driver, Driver2, Driver3];
  return (
    <div>
      <div className="text-center text-[2rem] font-bold">AVAILABLE DRIVERS</div>
      <div>
        {Driverlist.map((driver) => {
          return (
            <div
              key={driver.index}
              className=" flex flex-wrap bg-yellow-300 flex-col rounded-[10px] text-[18px] p-[1rem] m-[1rem]  "
            >
              <div className="flex flex-col flex-wrap">
                <div className=" mr-[0.5rem] pb-[0.3rem]">{driver.name}</div>
                <div>{driver.phonenumber}</div>
              </div>
              <div className="flex pt-[0.5rem] pb-[0.4rem] flex-row flex-wrap">
                <div>{driver.rating}</div>
                <div>
                  <FaStar
                    fontSize={25}
                    className="mx-[0.3rem] pb-[0.4rem] pt-[0.5rem] relative"
                  />
                </div>
                <div className="flex   w-full">
                  {" "}
                  <img
                    src={driver.image}
                    alt="driver image"
                    className="relative  bottom-[2rem] ml-auto p-[0.25rem] "
                    width="100px"
                    height="100px"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
