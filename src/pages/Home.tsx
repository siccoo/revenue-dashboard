/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useGetUser } from "../api/hooks/useGetUser";
import Navbar from "../components/navbar";
import AppBar from "../components/appBar";

const Home = () => {
  const { userData, getUserloading, getUserError } = useGetUser();

  const loading = getUserloading;
  const error = getUserError;
  return (
    <div className="w-full p-[1.5%] !pt-0">
      <div className="w-[100%]">
        <div className="fixed">
          <div className="h-[20px] bg-white"></div>
          <Navbar user={userData?.data} />
        </div>
        <div className="flex">
          <div className=" fixed h-[130vh] flex items-center">
            <AppBar />
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
