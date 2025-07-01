import React from "react";
import Landing from "../component/Landing";
import ECellMarquee from "../component/Marquee";
import Startup from "../component/Startup";
import Mentor from "../component/Mentor";

const HomePage = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white ">
      <div className="absolute top-[-400px] left-1 -translate-x-1/2 
      w-[1000px] h-[1000px] rounded-full blur-[300px] opacity-40 -z-10 animate bg-blue-500 text-white"></div>

      {/* MAIN CONTENT */}
      <div className="py-10 relative z-2 text-white">
        <Landing />
        <ECellMarquee />
        <Startup />
        <Mentor />
      </div>
    </div>
  );
};

export default HomePage;