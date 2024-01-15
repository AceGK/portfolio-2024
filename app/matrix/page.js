'use client'

import { useEffect, useState } from 'react';

const MatrixRain = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // New state for fade out


  useEffect(() => {
    if (showCanvas) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      // let symbol = "¼µ¶±¿ÇÐØĦƔƢǄȡȹɊҖӁ‰＠ξζω□∮〓※∏卐√№↑↓→←↘↙Ψ※㊣∑╳々♀♂∞①ㄨ≡╬ӿӾӵ";
      let symbol = "アイウエオカキクケコサシスセソタチツテトナニヌネヒフヘホマミムメモヤユヨラリルロワヰヱヲンヴヾ";
      symbol = symbol.split("");

      const fontSize = 16;
      let drops = Array(100).fill(-1);

      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px arial";

        for (let i = 0; i < drops.length; i++) {
          if (drops[i] >= 0) {
            const text = symbol[Math.floor(Math.random() * symbol.length)];
            ctx.fillText(text, i * (canvas.width / 100), drops[i] * fontSize);
          }

          if (drops[i] < 0 && Math.random() > 0.92) {
            drops[i] = 0;
          }

          if (drops[i] >= 0) {
            drops[i]++;
          }
        }
      };

      const interval = setInterval(draw, 40);

      return () => clearInterval(interval);
    }
  }, [showCanvas]);

  const handleButtonClick = () => {
    setShowCanvas(true);
    setTimeout(() => setFadeOut(true), 3000); // Trigger fade out after 5 seconds
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Start Animation</button>
      <canvas id="canvas" style={{ display: showCanvas ? 'block' : 'none', opacity: fadeOut ? 0 : 1, transition: 'opacity 3s ease' }}></canvas>
      <style jsx>{`
        canvas {
          position: absolute;
          top: 0;
          left: 0;
        }
        body {
          background: black;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default MatrixRain;