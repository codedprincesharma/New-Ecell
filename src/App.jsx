import { Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import MAinroutes from "./routes/MAinroutes";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") || document.body,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container>
      <Navbar />
      <MAinroutes />
    </div>
  );
};

export default App;
