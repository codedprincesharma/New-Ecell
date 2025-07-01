import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../component/Footer";
import HomePage from "./../pages/Home";
import FounderSection from "./../pages/Founder";
import TeamSection from "./../pages/Team";
import Event from "./../pages/Event";
import IdeaForm from "../pages/Idea";
import ECellContact from "../pages/Contect";
import About from "./../pages/About";

const MainRoutes = () => {
  return (
    <div className="bg-gray-500">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder" element={<FounderSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/idea" element={<IdeaForm />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<ECellContact />} />
        {/* <Route  path="/login" element={<Login />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
