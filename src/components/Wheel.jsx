import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Wheel.css';

const Wheel = ({ options, onStop, isSpinning, spinResult }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      const numOptions = options.length;
      const sliceAngle = 360 / numOptions;
      const targetIndex = options.findIndex((opt) => opt.id === spinResult.id);
      
      const extraSpins = 3;
      // + 90 because indicator is on the right now
      const targetRotation = 360 * extraSpins - (targetIndex * sliceAngle) + 90 + (Math.random() * (sliceAngle * 0.4) - (sliceAngle * 0.2));
      
      setRotation(prev => prev + targetRotation + (360 - (prev % 360)));
    }
  }, [isSpinning, spinResult, options]);

  const numOptions = options.length;
  const sliceAngle = 360 / numOptions;
  const radius = 200;
  const center = 200;

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    };

    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", x, y,
      "Z"
    ].join(" ");
  };

  return (
    <div className="wheel-container">
      {/* Right indicator pin */}
      <div className="wheel-pin-right">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <polygon points="5,20 40,5 40,35" fill="var(--wheel-border)" />
        </svg>
      </div>

      <motion.div 
        className="wheel"
        animate={{ rotate: rotation }}
        transition={{ duration: 4.5, ease: "easeOut" }}
        onAnimationComplete={() => { if(isSpinning) onStop() }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          {/* Wheel background border */}
          <circle cx="200" cy="200" r="192.5" fill="none" stroke="var(--wheel-border)" strokeWidth="15" />
          
          {options.map((opt, i) => {
            const startAngle = i * sliceAngle - (sliceAngle / 2);
            const endAngle = startAngle + sliceAngle;
            
            const fillColor = i % 2 === 0 ? "var(--slice-green-1)" : "var(--slice-green-2)";
            
            const dotAngle = (startAngle - 90) * Math.PI / 180;
            const dotX = center + 192.5 * Math.cos(dotAngle);
            const dotY = center + 192.5 * Math.sin(dotAngle);

            const lines = opt.text.split('\n');

            return (
              <g key={opt.id}>
                <path 
                  d={describeArc(center, center, radius - 15, startAngle, endAngle)} 
                  fill={fillColor} 
                  stroke="var(--wheel-border)" 
                  strokeWidth="4"
                />
                
                <circle cx={dotX} cy={dotY} r="3.5" fill="var(--slice-green-1)" />

                <g transform={`translate(${center}, ${center}) rotate(${i * sliceAngle - 90})`}>
                  <text 
                    x="115"
                    y="0" 
                    fill="var(--slice-text)"
                    className="slice-text"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {lines.map((line, index) => {
                      const offsetValue = 8;
                      const yOffset = lines.length === 2 ? (index === 0 ? -offsetValue : offsetValue) : 0;
                      return (
                        <tspan x="115" y={yOffset} key={index}>{line}</tspan> 
                      )
                    })}
                  </text>
                </g>
              </g>
            );
          })}
          
          <circle cx="200" cy="200" r="35" fill="var(--wheel-center)" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Wheel;
