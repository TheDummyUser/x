import React, { useState, useEffect } from "react";
import Heder from "../components/Heder";
const Home = () => {
  return (
    <>
      <Heder />

      <div className=" bg-slate-900 text-teal-300 h-full w-full justify-between p-5">
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
          <p>
            Okie if you find this page, that means you one of the internet
            freeks ig!
          </p>
          <hr  className="h-1 bg-slate-100 w-full rounded-lg"/>
          <p>if i ever upload a blog they for sure come here!!!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
