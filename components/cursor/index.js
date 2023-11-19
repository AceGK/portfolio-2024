'use client';

import { useEffect } from 'react';

const CursorGlow = () => {
    useEffect(() => {
        const cursorGlow = document.createElement('div');
        cursorGlow.classList.add('cursor-glow');
        document.body.appendChild(cursorGlow);

        const moveCursor = (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursorGlow);
        };
    }, []);

    return null; 
};

export default CursorGlow;