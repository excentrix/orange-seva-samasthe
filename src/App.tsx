import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./components/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import { Mission } from "./pages/Mission";
import { Impact } from "./pages/Impact";
import { History } from "./pages/History";
import { Team } from "./pages/Team";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header component */}
        <Header />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />

            {/* About page route */}
            <Route path="/about" element={<About />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/impact" element={<Impact />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/team" element={<Team />} />

            {/* Projects page route */}
            <Route path="/projects" element={<Projects />} />

            {/* Gallery page route */}
            <Route path="/gallery" element={<Gallery />} />

            {/* Testimonials page route */}
            <Route path="/testimonials" element={<Testimonials />} />

            {/* Contact page route */}
            <Route path="/contact" element={<Contact />} />

            {/* Donate page route */}
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
