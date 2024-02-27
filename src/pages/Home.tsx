import Heder from "../components/Heder";

const Home = () => {
  return (
    <>
      <Heder />
      <div className=" font-JetBrains bg-black text-slate-400 h-full w-full justify-between p-5">
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
          <p>
            Okie if you find this page, that means you one of the internet
            freeks ig!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;