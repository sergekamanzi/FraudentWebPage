import { useState, useEffect } from "react";
import "./video.css";

const Video = () => {
  const [accuracyCount, setAccuracyCount] = useState(0);
  const [diseasesCount, setDiseasesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  
  useEffect(() => {
    // For 98% accuracy counter
    const accuracyInterval = setInterval(() => {
      setAccuracyCount(prev => {
        if (prev >= 98) {
          clearInterval(accuracyInterval);
          return 98;
        }
        return prev + 1;
      });
    }, 40);
    
    // For 10+ diseases counter
    const diseasesInterval = setInterval(() => {
      setDiseasesCount(prev => {
        if (prev >= 10) {
          clearInterval(diseasesInterval);
          return 10;
        }
        return prev + 1;
      });
    }, 200);
    
    // For 50,000+ users counter
    const usersInterval = setInterval(() => {
      setUsersCount(prev => {
        if (prev >= 50000) {
          clearInterval(usersInterval);
          return 50000;
        }
        return prev + Math.floor(Math.random() * 1000) + 500;
      });
    }, 50);
    
    return () => {
      clearInterval(accuracyInterval);
      clearInterval(diseasesInterval);
      clearInterval(usersInterval);
    };
  }, []);
  
  return (
    <div className="main-video">
      <video className="background-video" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="stats-container">
        <div className="stat-item">
          <h2 className="stat-number">{accuracyCount}%</h2>
          <p className="stat-text">Detection Accuracy</p>
        </div>
        
        <div className="stat-item">
          <h2 className="stat-number">{diseasesCount}+</h2>
          <p className="stat-text">Fraud Types in Database</p>
        </div>
        
        <div className="stat-item">
          <h2 className="stat-number">{usersCount.toLocaleString()}+</h2>
          <p className="stat-text">Happy Users</p>
        </div>
      </div>
    </div>
  );
};

export default Video;