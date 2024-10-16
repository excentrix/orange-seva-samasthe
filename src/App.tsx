import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Gallery from "./components/Gallery";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import Donate from "./pages/Donate";
// import { Mission } from "./pages/Mission";
// import { Impact } from "./pages/Impact";
// import { History } from "./pages/History";
// import { Team } from "./pages/Team";

import { HelmetProvider } from "react-helmet-async";
import StructuredData from "./components/StructuredData";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Donate = lazy(() => import("./pages/Donate"));
const Footer = lazy(() => import("./components/Footer"));
const Gallery = lazy(() => import("./components/Gallery"));
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const Impact = lazy(() => import("./pages/Impact"));
const Mission = lazy(() => import("./pages/Mission"));
const Projects = lazy(() => import("./pages/Projects"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Team = lazy(() => import("./pages/Team"));
const History = lazy(() => import("./pages/History"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-50 font-hel">
            <Header />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />

                {/* About page routes */}
                <Route path="/about" element={<About />} />
                <Route path="/about/mission" element={<Mission />} />
                <Route path="/about/impact" element={<Impact />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/team" element={<Team />} />

                <Route path="/projects" element={<Projects />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/testimonials" element={<Testimonials />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Footer component */}
            <Footer />
          </div>
        </Router>
      </Suspense>
      <StructuredData
        type="NGO"
        name="Orange Seva Samsthe"
        url="https://www.orangeseva.in"
        logo="https://www.orangeseva.in/media/logo.jpg"
        description="Orange Seva Samsthe is an NGO dedicated to creating sustainable change and empowering communities through innovative social initiatives."
      />
    </HelmetProvider>
  );
};

export default App;
