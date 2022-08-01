/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Firebase';

function Logout() {
  const [checked, setChecked] = useState<boolean>(false);
  const consumerFirebase = useContext(FirebaseContext);

  useEffect(() => {
    if (checked) {
      // console.log('deconnexion');
      consumerFirebase?.signoutUser();
    }
  }, [checked, consumerFirebase]);
  //
  function handleChange() {
    setChecked(!checked);
  }
  return (
    <div className="logoutConatainer">
      Logout
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="slider round" />
      </label>
    </div>
  );
}
export default Logout;
