import React, { useState } from 'react';
import Wheel from './components/Wheel';
import ResultModal from './components/ResultModal';
import optionsData from './data/options.json';
import './App.css';

const Logo = () => (
  <div className="nest-logo-container">
    <div className="logo-top-text">WHERE TALENT MEETS OPPORTUNITY</div>
    <div className="logo-main">
      <div className="logo-line"></div>
      <div className="logo-nest">NEST</div>
      <div className="logo-summit">Summit</div>
      <div className="logo-line"></div>
    </div>
    <div className="logo-star star-1">✦</div>
    <div className="logo-star star-2">✦</div>
  </div>
);

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const options = optionsData; 

  const handleSpin = () => {
    if (isSpinning) return;
    
    const randomIndex = Math.floor(Math.random() * options.length);
    const result = options[randomIndex];
    
    setSpinResult(result);
    setIsSpinning(true);
    setShowModal(false);
  };

  const handleStop = () => {
    setIsSpinning(false);
    setShowModal(true);
  };

  return (
    <div className="app-container">
      <Logo />
      
      <main className="main-content">
        <div className="wheel-section" onClick={!isSpinning ? handleSpin : undefined}>
          <Wheel 
            options={options} 
            onStop={handleStop}
            isSpinning={isSpinning}
            spinResult={spinResult}
          />
        </div>
      </main>

      {showModal && spinResult && (
        <ResultModal 
          result={spinResult} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}

export default App;
