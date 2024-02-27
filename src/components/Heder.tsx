import { Link } from "react-router-dom";
const Heder = () => {
  return (
    <div
      className=" font-JetBrain bg-black border-b-4
     text-yellow-300
      p-5 
      justify-around 
      border-red-300
    "
    >
      <div className="flex justify-end md:space-x-6 space-x-3">
        <p className="">
          {" "}
          <button className="inline-flex md:h-10 h-8 md:font-medium md:font-JetBrains font-JetBrains text-sm animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link to="/">Home</Link>
          </button>
        </p>
        <p>
          {" "}
          <button className="inline-flex md:h-10 h-8 md:font-medium md:font-JetBrains font-JetBrains text-sm animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link to="/about"> About</Link>
          </button>
        </p>
        <p>
          {" "}
          <button className="inline-flex md:h-10 h-8 md:font-medium md:font-JetBrains font-JetBrains text-sm animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link to="/projects"> Projects</Link>
          </button>
        </p>
        <p>
          <button className="inline-flex md:h-10 h-8 md:font-medium md:font-JetBrains font-JetBrains text-sm animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link to="/contactme">Contact Me</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Heder;