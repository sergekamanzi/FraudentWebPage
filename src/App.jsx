import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Technologies from './components/Technologies/tech'
import Video from './components/Video/video'
function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Video/>
    </>
  )
}

export default App
