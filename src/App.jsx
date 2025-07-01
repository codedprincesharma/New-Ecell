import { Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import MAinroutes from "./routes/MAinroutes";
const App = () => {
  return (
    <>
      <Navbar />
      <MAinroutes />
    </>
  );
};

export default App;
