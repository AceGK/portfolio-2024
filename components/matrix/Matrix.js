'use client';

import { useState, useEffect, useRef } from 'react';
import Rabbit from '../../public/rabbit.svg';
import Cards from '../../public/cards.svg';
import Card from '../../public/card-spade.svg';

export default function Matrix() {
  const [matrix, setMatrix] = useState(false);
  const [modal, setModal] = useState(false);

  // 
  useEffect(() => {
    if (matrix) {
      document.body.classList.add('matrix');
      scroll(0, 0);
      setModal(false);
    } else {
      document.body.classList.remove('matrix');
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
        <span className="visually-hidden">Wake up</span>
        {matrix ? <Card onClick={() => setMatrix(false)} /> : <Rabbit onClick={() => setModal(true)} />}
      </button>

      {modal &&
        <dialog className="matrix-dialog">
          <button onClick={() => setMatrix(true)}>
            <span className="visually-hidden">Red pill</span>
          </button>
          <button onClick={() => setModal(false)}>
            <span className="visually-hidden">Blue pill</span>
          </button>
        </dialog>
      }
    </>
  );
}