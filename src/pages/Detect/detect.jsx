import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./detect.css";
import { IoIosArrowForward } from "react-icons/io";

const DetectPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const returnToLanding = () => {
    navigate('/');
  };

  return (
    <div className="detect-container">
      <div className="header">
        <button className="close-landing-btn" onClick={returnToLanding}>&times;</button>
      </div>
      
      <button className="open-btn" onClick={togglePopup}>Detect Fraud<IoIosArrowForward />
      </button>
      
      <div className="instructions">
        <h3>How to Use the Fraud Detection Tool</h3>
        <ol>
          <li>Click the &quot;Detect Fraud&quot; button above to open the detection form</li>
          <li>Enter the Time Step number for the transaction</li>
          <li>Select the type of transaction from the dropdown menu</li>
          <li>Input the transaction amount</li>
          <li>Enter the account balances before and after the transaction:
            <ul>
              <li>Old Balance Origin: The sender&apos;s balance before the transaction</li>
              <li>New Balance Origin: The sender&apos;s balance after the transaction</li>
              <li>Old Balance Destination: The recipient&apos;s balance before the transaction</li>
              <li>New Balance Destination: The recipient&apos;s balance after the transaction</li>
            </ul>
          </li>
          <li>Click &quot;Detect Fraud&quot; to analyze the transaction</li>
        </ol>
      </div>
      
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Fraud Detection Tool</h2>
            <button className="close-btn" onClick={togglePopup}>&times;</button>
            <form>
              <div className="input-group">
                <label>Step (Time Step)</label>
                <input type="number" placeholder="e.g., 1" />
              </div>

              <div className="input-group">
                <label>Transaction Type</label>
                <select>
                  <option>Select Type</option>
                  <option>Transfer</option>
                  <option>Cash Out</option>
                  <option>Payment</option>
                </select>
              </div>

              <div className="input-group">
                <label>Amount</label>
                <input type="number" placeholder="e.g., 5000.00" />
              </div>

              <div className="input-group">
                <label>Old Balance Origin</label>
                <input type="number" placeholder="e.g., 10000.00" />
              </div>

              <div className="input-group">
                <label>New Balance Origin</label>
                <input type="number" placeholder="e.g., 5000.00" />
              </div>

              <div className="input-group">
                <label>Old Balance Destination</label>
                <input type="number" placeholder="e.g., 2000.00" />
              </div>

              <div className="input-group">
                <label>New Balance Destination</label>
                <input type="number" placeholder="e.g., 7000.00" />
              </div>

              <div className="button-group">
                <button type="button" className="cancel-btn" onClick={togglePopup}>Cancel</button>
                <button type="submit" className="detect-btn">Detect Fraud</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetectPopup;