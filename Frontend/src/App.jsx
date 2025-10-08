import React from "react";
import Navbar from "./component/common/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Footer from "./component/common/Footer.jsx";
// import Gallery from "./pages/Gallery.jsx";
import Features from "./pages/features.jsx";
import ContactUs from "./component/common/ContactUs.jsx";
import OurTeam from "./component/OurTeam.jsx";
import Programs from "./component/Programs.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import Admin from "./component/Admin.jsx";
import Login from "./component/Login.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";

const App = () => {
  return (
    <div className="flex flex-col max-w-6xl">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={[<HomePage />, <Features />]} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
