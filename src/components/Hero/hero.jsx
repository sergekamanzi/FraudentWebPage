import "./hero.css"
import { FaShieldAlt } from "react-icons/fa";
import hero2 from "/hero2.png"
const hero = () => {
  return (
    <div className="main-hero">
       <div className="hero-content">
           <h2>Advanced Fraud Detection for Your Financial Security</h2>
           <p>Protect your transactions with our AI-powered fraud detection 
            system. Get instant alerts and prevent financial losses before they happen.
            </p>
            <div className="hero-btn">
                <button className="btn1"><FaShieldAlt /> Detect fraud now</button>
                <button className="btn2">Learn more</button>
            </div>
       </div>
       <div className="hero-img">
           <img src={hero2} alt="" />
       </div>
    </div>
  )
}

export default hero