import "./about.css"
import { FaFileShield } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { FaBrain } from "react-icons/fa6";
const about = () => {
  return (
    <div className="main-about">
       <h3>Why choose our Fraud detection?</h3>
       <p>Our advanced AI algorithm analyses transaction patterns to 
        identify suspicious activity with high accuracy, keeping your finances secure.
       </p>
     
       <div className="about-cards">
           <div className="card">
              <FaFileShield />
              <h5>Real time detection</h5>
              <p>Get instant alerts when suspicious transaction are detected, allowing for immediate action.</p>
           </div>
           <div className="card">
              <FaBrain />
              <h5>Advanced Ai</h5>
              <p>Our machine learning model continuously improve to detect even the most complex fraud patterns.</p>
           </div>
           <div className="card">
              <IoMdAnalytics />
              <h5>Comprehensive Analysis </h5>
              <p>we analyse multiple transaction parameters to provide a through assessment of potential fraud risks.</p>
           </div>
       </div>
    </div>
  )
}

export default about
