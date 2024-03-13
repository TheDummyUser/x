import Heder from "../components/Heder";

const Home = () => {
  return (
    <>
      <Heder />
      <div className=" font-JetBrains bg-black text-slate-400 h-full w-full justify-between p-5">
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
          <p>
            if you find this page, that means you are one of the internet freeks
            ig!
            <br />
            okie so yeah visit about me or any other pages to know more about
            me....
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
