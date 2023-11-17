'use client';

import { useState, useEffect, useRef } from 'react';
import Rabbit from '../../public/rabbit.svg';
import Cards from '../../public/cards.svg';

export default function Matrix() {
  const [matrix, setMatrix] = useState(false);

  const handleUserChoice = (choice) => {
    setMatrix(choice);
    modalRef.current?.close();
  };

  useEffect(() => {
    if (matrix) {
      document.body.classList.add('matrix');
    } else {
      document.body.classList.remove('matrix');
    }
  }, [matrix]);

  return (
    <>
      <button className="wake-up">
        <span className="visually-hidden">Wake up</span>
        {matrix ? <Cards onClick={()=>setMatrix(false)}/> : <Rabbit onClick={()=>setMatrix(true)}/>}
      </button>

      {/* <dialog ref={modalRef} className="matrix-dialog">
        <button onClick={() => handleUserChoice(true)}>
          <span className="visually-hidden">Red pill</span>
        </button>
        <button onClick={() => handleUserChoice(false)}>
          <span className="visually-hidden">Blue pill</span>
        </button>
      </dialog> */}
    </>
  );
}