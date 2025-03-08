import { useState } from "react";
import "./detect.css";

const DetectPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="detect-container">
      <button className="open-btn" onClick={togglePopup}>Detect Fraud</button>
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