import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Technologies from './components/Technologies/tech'
import Video from './components/Video/video'
import Discover from './components/Discover/disc'
import Contact from './components/Contact/contact'
function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Video/>
      <Discover/>
      <Contact/>
    </>
  )
}

export default App
