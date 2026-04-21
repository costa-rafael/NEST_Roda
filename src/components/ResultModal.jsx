import React from 'react';
import './ResultModal.css';

const ResultModal = ({ result, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="elegant-modal" style={{ animation: 'fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} onClick={e => e.stopPropagation()}>
        <h2 className="modal-subtitle">
          {result.text.toLowerCase() === "sem prémio" ? "Tenta Novamente..." : "Parabéns!"}
        </h2>
        
        <div className="prize-box">
          <h1 className="prize-text">
            {result.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
          </h1>
        </div>

        <button className="btn-continue" onClick={onClose}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
