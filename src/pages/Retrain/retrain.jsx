// retrain.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Add this import
import './retrain.css';

const Retrain = () => {
  const [file, setFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [testAccuracy, setTestAccuracy] = useState(null);
  const [trainingEpochs, setTrainingEpochs] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Add this for navigation

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRetrain = async () => {
    if (!file) {
      setStatusMessage('Please upload a CSV file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);
    setStatusMessage('Retraining model...');

    try {
      const response = await axios.post('https://fraud-backend-283k.onrender.com/retrain', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setTestAccuracy(response.data.test_accuracy);
      setTrainingEpochs(response.data.training_epochs);
      setStatusMessage('Model retrained successfully!');
    } catch (error) {
      setStatusMessage(`Error during retraining: ${error.response ? error.response.data.detail : error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate('/'); // Redirects to landing page (assuming '/' is your landing page route)
  };

  return (
    <div className="retrain-container">
      <div className="close-button" onClick={handleClose}>✖</div> {/* Add close button */}
      <h1>Retrain Fraud Detection Model</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleRetrain} disabled={loading}>
        {loading ? 'Retraining...' : 'Retrain Model'}
      </button>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      {testAccuracy !== null && (
        <div className="results">
          <p>Test Accuracy: {testAccuracy}</p>
          <p>Training Epochs: {trainingEpochs}</p>
        </div>
      )}
    </div>
  );
};

export default Retrain;
