/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  //
  const refWolverine = useRef<null | HTMLElement>(null);
  const [btn, setBtn] = useState<boolean>(false);

  //
  useEffect(() => {
    // ? si ginifie si classList existe dans current
    refWolverine.current?.classList.add('startingImg');
    setTimeout(() => {
      refWolverine.current?.classList.remove('startingImg');
      setBtn(true);
    }, 1000);
  }, []);
  //
  function setLeftImg(): void {
    refWolverine.current?.classList.add('leftImg');
  }

  function setRigthImg(): void {
    refWolverine.current?.classList.add('rightImg');
  }
  function clearImg(): void {
    if (refWolverine.current?.classList.contains('rightImg')) {
      refWolverine.current?.classList.remove('rightImg');
    } else if (refWolverine.current?.classList.contains('leftImg')) {
      refWolverine.current?.classList.remove('leftImg');
    }
  }
  //
  const displayBtn = btn && (
    <>
      <div className="leftBox">
        <Link
          type="button"
          className="btn-welcome"
          onMouseOver={() => { setLeftImg(); }}
          onMouseOut={() => { clearImg(); }}
          to="/signup"
        >
          Inscription

        </Link>
      </div>
      <div className="rightBox">
        <Link
          type="button"
          className="btn-welcome"
          onMouseOver={() => { setRigthImg(); }}
          onMouseOut={() => { clearImg(); }}
          to="/login"
        >
          Connexion

        </Link>
      </div>
    </>
  );
  //
  return (
    <header>
      <main ref={refWolverine} className="welcomePage">
        {displayBtn}
      </main>
    </header>
  );
}
export default Landing;
