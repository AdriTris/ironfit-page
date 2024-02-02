import React from "react";
import Image from "next/image";

function Features() {
  return (
    <main
      className="h-full w-full px-10 relative z-0 pt-16 max-sm:pt-12"
      id="home"
    >
      <div className="w-60 h-20 bg-zinc-200 rounded-lg absolute top-[30rem] right-72 flex p-3 max-sm:right-20 max-sm:top-[60rem] ">
        <div className="w-2/3 h-full flex flex-col justify-center gap-2">
          <span className=" font-medium text-xs text-zinc-800">
            Today&apos;s Calories
          </span>
          <span className=" font-bold text-md text-zinc-800">150 Cal</span>
        </div>
        <div className="w-1/3 h-10/12 flex items-end gap-2">
          <div className="w-1/6 h-1/2 bg-gradient-to-b from-orange-300 to-red-500 rounded-xl"></div>
          <div className="w-1/6 h-3/4 bg-gradient-to-b from-orange-300 to-red-500 rounded-xl"></div>
          <div className="w-1/6 h-3/5 bg-gradient-to-b from-orange-300 to-red-500 rounded-xl"></div>
          <div className="w-1/6 h-full bg-gradient-to-b from-orange-300 to-red-500 rounded-xl"></div>
          <div className="w-1/6 h-5/6 bg-gradient-to-b from-orange-300 to-red-500 rounded-xl"></div>
        </div>
      </div>
      <div className="h-full w-full grid grid-cols-2 max-sm:grid-cols-1">
        <div className="w-9/12 h-full grid items-center py-12 max-sm:w-full max-sm:gap-6 max-sm:py-8">
          <p className="text-5xl font-bold leading-relaxed max-sm:text-4xl max-sm:leading-normal max-sm:text-center">
            GET HEALTHY BODY WITH THE PERFECT EXCERCISES
          </p>
          <p className="text-xl font-light max-sm:text-base max-sm:text-center ">
            We are always there to help you to make a healthy body and mind
            through the power of fitness.
          </p>
          <button className="w-40 h-12 py-3 px-8 bg-red-500 rounded-md max-sm:mx-auto">
            Get Started
          </button>
          <div className="grid grid-cols-3 max-sm:justify-items-center">
            <div className="w-36 border-r-2 border-zinc-400 pr-2 max-sm:w-full max-sm:flex max-sm:flex-col ">
              <p className="text-xl font-semibold max-sm:text-center">105+</p>
              <p className="text-l font-extralight max-sm:text-center">
                Expert Trainers
              </p>
            </div>
            <div className="w-36 border-r-2 border-zinc-400 pr-4 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:pr-0">
              <p className="text-xl font-semibold max-sm:text-center">970+</p>
              <p className="text-l font-extralight max-sm:text-center">
                Member Joined
              </p>
            </div>
            <div className="w-36 max-sm:w-full max-sm:flex max-sm:flex-col ">
              <p className="text-xl font-semibold max-sm:text-center">135+</p>
              <p className="text-l font-extralight max-sm:text-center">
                Fitness Programs
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            src="/assets/trainers.png"
            alt="Trainers"
            className="w-full h-[39.5rem] object-cover object-top"
          />
        </div>
      </div>
    </main>
  );
}

export default Features;
