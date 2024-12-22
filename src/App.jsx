
import React from 'react';
import './App.css';
import Home from './Components/home/Home';
import Sidebar from "./Components/sidebar/sidebar";
import About from "./Components/about/About"
import Services from "./Components/services/services";
import Skills from "./Components/skills/Skills";
import Resume from "./Components/resume/resume";
import Testimonials from "./Components/testimonials/testimonials";
import Contact from './Components/contact/contact';
import Pricing from './Components/pricing/pricing';

const App = () => {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
       <Resume/>
       <Skills/>
       <Pricing/>
       <Testimonials/>
       <Contact/>
       
      </main>
    </div>
  );
};


export default App;
