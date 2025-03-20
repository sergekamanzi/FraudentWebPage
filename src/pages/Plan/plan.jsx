import "./plan.css";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Plan = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle close button click
  const handleClose = () => {
    navigate("/"); // Navigate back to landing page
  };

  return (
    <div className="plan-container">
      {/* Close button added here */}
      <div className="close-button" onClick={handleClose}>
        ✕
      </div>
      
      <div className="plan-header">
        <h1 className="plan-title">Choose the Perfect Fraud Detection Plan for Your Business</h1>
        <p className="plan-subtitle">
          Empower your organization with solutions tailored for effective fraud protection, no matter your size.
        </p>
      </div>

      <div className="plan-cards">
        {/* Basic Plan */}
        <div className="plan-card">
          <h3>Basic Plan</h3>
          <p>
            Ideal for smaller businesses looking for essential fraud protection, this plan provides the basics to keep your operations secure.
          </p>
          <h2 className="price">$10</h2>
          <p className="checks">100 CHECKS/MONTH</p>
          <button className="plan-btn">CHOOSE THIS PLAN</button>
          <ul>
            <li>✅ 100 Monthly Fraud Checks</li>
            <li>✅ Basic Detection Algorithms</li>
            <li>✅ Real-Time Alerts</li>
            <li>✅ Basic Analytics Dashboard</li>
            <li>✅ Limited User Access (1-2 Users)</li>
            <li>✅ Email Support During Business Hours</li>
          </ul>
        </div>

        {/* Premier Plan (Highlighted) */}
        <div className="plan-card popular">
          <span className="popular-badge">MOST POPULAR</span>
          <h3>Premier Plan</h3>
          <p style={{ color: "white" }}>
            Designed for medium-sized businesses, this plan enhances your fraud prevention capabilities with advanced features and 24/7 support.
          </p>
          <h2 className="price">$50</h2>
          <p className="checks" style={{ color: "white" }}>500 CHECKS/MONTH</p>
          <button className="plan-btn">CHOOSE THIS PLAN</button>
          <ul>
            <li>✅ 500 Monthly Fraud Checks</li>
            <li>✅ Advanced Machine Learning Algorithms</li>
            <li>✅ Detailed Alerts and Insights</li>
            <li>✅ API Integration</li>
            <li>✅ 24/7 Email and Chat Support</li>
            <li>✅ Customizable Reporting</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="plan-card">
          <h3>Pro Plan</h3>
          <p>
            For large enterprises, this comprehensive plan delivers unlimited capabilities and dedicated support, ensuring robust security.
          </p>
          <h2 className="price">$150</h2>
          <p className="checks">UNLIMITED CHECKS</p>
          <button className="plan-btn">CHOOSE THIS PLAN</button>
          <ul>
            <li>✅ Unlimited Monthly Fraud Checks</li>
            <li>✅ AI-Powered Detection Models</li>
            <li>✅ Comprehensive Real-Time Insights</li>
            <li>✅ Priority Support 24/7</li>
            <li>✅ Custom Risk Assessments</li>
            <li>✅ Dedicated Account Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plan;