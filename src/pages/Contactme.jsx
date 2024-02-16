import React from "react";
import Heder from "../components/Heder";
const Contactme = () => {
  return (
    <>
      <Heder />

      <div className=" font-JetBrains bg-slate-900 text-teal-300 h-screen p-5 pt-32">
        <p className="md:text-6xl text-xl">Contact Me:</p>

        <div className=" space-y-3">
          <div className=" pt-12 space-y-8">
            <p>Ofcource i can center this div so...</p>
            <p>
              {" "}
              <a href="">Github</a>
            </p>
            <p>
              <a href="mailto:abhiram.reddy122002@gmail.com">Gmail</a>
            </p>
            <p>ping Me on Discord: adorable__brain69</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
