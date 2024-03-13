import Heder from "../components/Heder";
const Contactme = () => {
  return (
    <>
      <Heder />

      <div className=" font-JetBrains bg-black text-slate-400 h-screen p-5 pt-32">
        <p className="md:text-6xl text-xl">Contact Me:</p>

        <div className=" space-y-3 pl-14 md:pl-36">
          <div className=" pt-12 space-y-8">
            <p>Ofcource i can center this div but i won't...</p>
            <p>
              {" "}
              <a href="https://github.com/TheDummyUser">Github</a>
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
