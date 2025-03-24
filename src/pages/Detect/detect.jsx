import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./detect.css";
import { IoIosArrowForward } from "react-icons/io";

const DetectPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    step: "",
    type: "",
    amount: "",
    oldbalanceOrg: "",
    newbalanceOrig: "",
    oldbalanceDest: "",
    newbalanceDest: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setPrediction(null); // Reset prediction when closing/opening
    setError(null); // Reset error when closing/opening
  };

  const returnToLanding = () => {
    navigate("/");
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Map transaction types to integers (consistent with backend expectations)
  const typeToInt = (type) => {
    const typeMap = {
      TRANSFER: 0,
      CASH_OUT: 1,
      DEBIT: 2,
      CASH_IN: 3,
      PAYMENT: 4,
    };
    return typeMap[type] || 0; // Default to 0 if type not found
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPrediction(null); // Clear previous prediction
    setError(null); // Clear previous error

    // Prepare data for backend
    const data = {
      step: parseFloat(formData.step),
      type: typeToInt(formData.type),
      amount: parseFloat(formData.amount),
      oldbalanceOrg: parseFloat(formData.oldbalanceOrg),
      newbalanceOrig: parseFloat(formData.newbalanceOrig),
      oldbalanceDest: parseFloat(formData.oldbalanceDest),
      newbalanceDest: parseFloat(formData.newbalanceDest),
    };

    try {
      const response = await fetch("https://fraud-backend-ndx4.onrender.com//predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="detect-container">
      <div className="header">
        <button className="close-landing-btn" onClick={returnToLanding}>
          ×
        </button>
      </div>

      <button className="open-btn" onClick={togglePopup}>
        Detect Fraud <IoIosArrowForward />
      </button>

      <div className="instructions">
        <h3>How to Use the Fraud Detection Tool</h3>
        <ol>
          <li>Click the Detect Fraud button above to open the detection form</li>
          <li>Enter the Time Step number for the transaction</li>
          <li>Select the type of transaction from the dropdown menu</li>
          <li>Input the transaction amount</li>
          <li>
            Enter the account balances before and after the transaction:
            <ul>
              <li>Old Balance Origin: The senders balance before the transaction</li>
              <li>New Balance Origin: The senders balance after the transaction</li>
              <li>Old Balance Destination: The recipients balance before the transaction</li>
              <li>New Balance Destination: The recipients balance after the transaction</li>
            </ul>
          </li>
          <li>Click Detect Fraud to analyze the transaction</li>
        </ol>
      </div>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Fraud Detection Tool</h2>
            <button className="close-btn" onClick={togglePopup}>
              ×
            </button>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Step (Time Step)</label>
                <input
                  type="number"
                  name="step"
                  value={formData.step}
                  onChange={handleInputChange}
                  placeholder="e.g., 1"
                  required
                />
              </div>

              <div className="input-group">
                <label>Transaction Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="TRANSFER">TRANSFER</option>
                  <option value="CASH_OUT">CASH_OUT</option>
                  <option value="DEBIT">DEBIT</option>
                  <option value="CASH_IN">CASH_IN</option>
                  <option value="PAYMENT">PAYMENT</option>
                </select>
              </div>

              <div className="input-group">
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="e.g., 5000.00"
                  step="0.01"
                  required
                />
              </div>

              <div className="input-group">
                <label>Old Balance Origin</label>
                <input
                  type="number"
                  name="oldbalanceOrg"
                  value={formData.oldbalanceOrg}
                  onChange={handleInputChange}
                  placeholder="e.g., 10000.00"
                  step="0.01"
                  required
                />
              </div>

              <div className="input-group">
                <label>New Balance Origin</label>
                <input
                  type="number"
                  name="newbalanceOrig"
                  value={formData.newbalanceOrig}
                  onChange={handleInputChange}
                  placeholder="e.g., 5000.00"
                  step="0.01"
                  required
                />
              </div>

              <div className="input-group">
                <label>Old Balance Destination</label>
                <input
                  type="number"
                  name="oldbalanceDest"
                  value={formData.oldbalanceDest}
                  onChange={handleInputChange}
                  placeholder="e.g., 2000.00"
                  step="0.01"
                  required
                />
              </div>

              <div className="input-group">
                <label>New Balance Destination</label>
                <input
                  type="number"
                  name="newbalanceDest"
                  value={formData.newbalanceDest}
                  onChange={handleInputChange}
                  placeholder="e.g., 7000.00"
                  step="0.01"
                  required
                />
              </div>

              <div className="button-group">
                <button type="button" className="cancel-btn" onClick={togglePopup}>
                  Cancel
                </button>
                <button type="submit" className="detect-btn">
                  Detect Fraud
                </button>
              </div>
            </form>

            {/* Display prediction or error */}
            {prediction && (
              <div className="result">
                <h3>Prediction: {prediction}</h3>
              </div>
            )}
            {error && (
              <div className="error">
                <h3>Error: {error}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetectPopup;
