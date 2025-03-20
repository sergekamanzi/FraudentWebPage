import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Technologies from './components/Technologies/tech';
import Video from './components/Video/video';
import Discover from './components/Discover/disc';
import Contact from './components/Contact/contact';
import Plan from './pages/Plan/plan';
import Detect from './pages/Detect/detect';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Video />
            <Discover />
            <Contact />    
          </>
        } />
         <Route path="/plan" element={<Plan />} />
         <Route path="/detect" element={<Detect />} />
      </Routes>
    </Router>
  );
}

export default App;
