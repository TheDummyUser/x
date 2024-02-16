import React from "react";
import Heder from "../components/Heder";

const Projects = () => {
  return (
    <>
      <Heder />
      <div className="font-JetBrains bg-slate-900 h-full md:h-screen text-teal-300 p-5">
        <div className=" pt-32 ">
          <p className="md:text-6xl text-xl"> Projects:</p>
        </div>

        <div className="pt-12 space-y-5">
          <p className="md:pl-14">
            These are the few personal projects ive worked on ...
          </p>
          <div className=" md:pl-16 space-y-5">
            <div className="space-y-2">
              <p className=" underline">Project 1:</p>
              <p>
                 Ofcource This site is one of my projects, check the code{" "}
                <a
                  className="underline"
                  href="https://github.com/TheDummyUser/x"
                >
                  "Here"
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <span className=" underline">Project 2:</span>
              <div>
                <p>
                   Albion market, is a project Based on{" "}
                  <a className="underline" href="https://albiononline.com/home">
                    Albion Online MMORPG
                  </a>
                  , in this project I fetch the{" "}
                  <a
                    className="underline"
                    href="https://www.albion-online-data.com/"
                  >
                    Albion Market Api
                  </a>{" "}
                  and provide a market price listing of a pertical item sold in
                  game market.{" "}
                  <span className=" underline">
                    <a href="https://github.com/TheDummyUser/Albion-market">
                      "click Here To Check It."
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="space-y-2 ">
              <p className="underline">project 3:</p>
              <p>
                 this might be the finest project i've workd on till now, its
                based up on{" "}
                <a className="underline" href="https://news.ycombinator.com/">
                  HackerNews.
                </a>
                In this project i use the Hacker news api to provide a frontend
                view of the api usign vite(react framework with tailwind css.),
                <a
                  href="https://github.com/TheDummyUser/hackernews"
                  className="underline"
                >
                  "code for the project is here"
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <p className="underline">Project 4:</p>
              <p>
                 And Last but Not the least, this is about the linux distro I
                use which is called{" "}
                <a href="https://nixos.wiki/" className="underline">
                  Nixos Wiki.
                </a>{" "}
                if you are wondering why i use this linux? its because of
                reproducability ig!, the distro never breaks untill or unless
                you do some shitty things to it! somewhere in the future i might
                distro hop tho!...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
