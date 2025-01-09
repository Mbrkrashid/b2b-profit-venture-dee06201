import React from 'react';

export const CryptoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20" />
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        >
          <img 
            src="/lovable-uploads/713c42f5-b18b-445b-a73e-822d62508c60.png" 
            alt="E-Coin"
            className="w-8 h-8 opacity-20"
          />
        </div>
      ))}
    </div>
  );
};