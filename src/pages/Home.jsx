import React, { useState, useEffect } from "react";
import Heder from "../components/Heder";
const Home = () => {
  return (
    <>
      <Heder />
      <div className=" font-JetBrains grid place-items-center bg-slate-900 w-screen h-screen text-teal-200 p-5 justify-around">
        <p>
          {" "}
          Ok, So by now you reached a point where you can see my work! what I
          have done and what I am up too!
        </p>
      </div>
    </>
  );
};

export default Home;
