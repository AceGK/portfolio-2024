'use client';

import { useState, useEffect, useRef } from 'react';
import Rabbit from '../../public/icons/rabbit.svg';
import Cards from '../../public/icons/cards.svg';
import Card from '../../public/icons/card-spade.svg';

export default function Matrix() {
  const [matrix, setMatrix] = useState(false);
  const [modal, setModal] = useState(false);

  
  useEffect(() => {
    if (matrix) {
      document.documentElement.classList.add('matrix');
      window.scrollTo(0, 0); // Corrected to use window.scrollTo
      setModal(false);
    } else {
      document.documentElement.classList.remove('matrix');
    }
  }, [matrix]);
  
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modal]);


  return (
    <>
      <button className="wake-up">
        <span className="visually-hidden">Follow the White Rabbit</span>
        {matrix ? <Card onClick={() => setMatrix(false)} /> : <Rabbit onClick={() => setModal(true)} />}
      </button>

      {modal &&
        <dialog className="matrix-dialog">
          <span className="visually-hidden">You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.</span>
          <button onClick={() => setMatrix(true)}>
            <span className="visually-hidden">Down the rabbit hole</span>
          </button>
          <button onClick={() => setModal(false)}>
            <span className="visually-hidden">Wake up</span>
          </button>
        </dialog>
      }
    </>
  );
}