import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./retrain.css";

const Retrain = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle retrain submission
  const handleRetrain = async () => {
    if (!file) {
      setMessage("Please upload a dataset first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/retrain", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.detail || error.message}`);
    }
  };

  return (
    <div className="retrain-container">
      <div className="header">
        <button className="close-btn" onClick={() => navigate("/")}>
          ×
        </button>
        <h2>Retrain Fraud Detection Model</h2>
      </div>

      <div className="upload-section">
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button className="retrain-btn" onClick={handleRetrain}>
          Retrain Model
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Retrain;