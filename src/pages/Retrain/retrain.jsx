import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './retrain.css';

const Retrain = () => {
  const [file, setFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [testAccuracy, setTestAccuracy] = useState(null);
  const [trainingEpochs, setTrainingEpochs] = useState(null);
  const [correlationHeatmap, setCorrelationHeatmap] = useState(null);
  const [confusionMatrix, setConfusionMatrix] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      console.log('API Response:', response.data); // Debug log
      setTestAccuracy(response.data.test_accuracy);
      setTrainingEpochs(response.data.training_epochs);
      setCorrelationHeatmap(response.data.correlation_heatmap);
      setConfusionMatrix(response.data.confusion_matrix);
      setStatusMessage('Model retrained successfully!');
    } catch (error) {
      console.error('Error during retraining:', error); // Debug log
      setStatusMessage(`Error during retraining: ${error.response ? error.response.data.detail : error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="retrain-container">
      <div className="close-button" onClick={handleClose}>✖</div>
      <h1>Retrain Fraud Detection Model</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleRetrain} disabled={loading}>
        {loading ? 'Retraining...' : 'Retrain Model'}
      </button>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      {testAccuracy !== null && (
        <div className="results">
          <p>Test Accuracy: {testAccuracy.toFixed(6)}</p>
          <p>Training Epochs: {trainingEpochs}</p>
        </div>
      )}
      {correlationHeatmap ? (
        <div className="plot">
          <h2>Correlation Heatmap</h2>
          <img src={correlationHeatmap} alt="Correlation Heatmap" style={{ maxWidth: '100%' }} />
        </div>
      ) : (
        <p>No correlation heatmap available.</p>
      )}
      {confusionMatrix ? (
        <div className="plot">
          <h2>Confusion Matrix</h2>
          <img src={confusionMatrix} alt="Confusion Matrix" style={{ maxWidth: '100%' }} />
        </div>
      ) : (
        <p>No confusion matrix available.</p>
      )}
    </div>
  );
};

export default Retrain;
