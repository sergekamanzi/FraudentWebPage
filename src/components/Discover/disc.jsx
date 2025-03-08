import "./disc.css";
import { useNavigate } from "react-router-dom";
import he from "/fraud.jpg";

const Disc = () => {
  const navigate = useNavigate();

  return (
    <div className="main-disc">
      <div className="disc-img">
        <img src={he} alt="Fraud Detection" />
      </div>
      <div className="disc-content">
        <h3>Elevate Your Security With Fraud-Shield&#39;s Expertise</h3>
        <p>
          Enhance your business&#39;s security posture through qwerty&#39;s advanced
          fraud detection technology, designed for professional environments. Our platform
          adeptly identifies and prevents fraudulent activities, enabling swift and decisive action.
        </p>
        <ul>
          <li>Proactive detection that safeguards your assets</li>
          <li>Real-time monitoring for immediate insights</li>
          <li>Customizable settings tailored to your needs</li>
          <li>Expert support guiding you through every step</li>
        </ul>
        <div className="disc-btn">
          <button onClick={() => navigate("/plan")}>
            Discover Our Fraud Detection Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disc;
