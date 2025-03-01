import "./tech.css"
import { GiGearStickPattern } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
const tech = () => {
  return (
    <div className="main-tech">
        <div className="tech-intro">
          <h3>Our Technology</h3>
          <p>our fraud detection system leverages state of the art
             machine learning algorithms to identify and prevent fraudulent transactions.
          </p>
        </div>
        <div className="tech-list">
           <ul>
              <li>
                <GiGearStickPattern />
                <h4>Pattern Recognition</h4>
                <p>Our algorithms identify unusual patterns in transaction data that may indicate fraudent activity.</p>
              </li>
              <li>
                <FaDatabase />
                <h4>Big Data Analysis</h4>
                <p>We process vast amounts of transaction data to build comprehensive fraud detection models.</p>
              </li>
              <li>
                <FaLock />
                <h4>Secure Processing</h4>
                <p>All data is processed with enterprise grade security protocals to ensure privacy and integrity.</p>
              </li>
              <li>
                <MdFlashOn />
                <h4>Fast Processing</h4>
                <p>Our system analyses transaction in milliseconds, ensuring minimal delay in processing legimite transactions.</p>
              </li>
              <li>
                <BsShieldFillCheck />
                <h4>Continuous Learning</h4>
                <p>Our model continuously improves by learning from new patterns and fraudulent transactions.</p>
              </li>
           </ul>
        </div>
    </div>
  )
}

export default tech
