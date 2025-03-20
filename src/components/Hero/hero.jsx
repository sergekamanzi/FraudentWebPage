import "./hero.css"
import { FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import hero2 from "/home1.png"
const hero = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <div className="main-hero">
       <div className="hero-content">
           <h2>Advanced Fraud Detection for Your Financial Security</h2>
           <p>Protect your transactions with our AI-powered fraud detection 
            system. Get instant alerts and prevent financial losses before they happen.
            </p>
            <div className="hero-btn">
                <button onClick={() => navigate("/detect")} className="btn1"><FaShieldAlt /> Detect fraud now</button>
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