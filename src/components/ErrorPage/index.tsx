import React from 'react';
import type * as CSS from 'csstype';

//
const centerH2: CSS.Properties = {
  textAlign: 'center',
  marginTop: '50px',
};
//
const centerImg = {
  display: 'block',
  margin: '40px auto',
};
function ErrorPage() {
  return (
    <div className="quiz-bg">
      <div className="container">
        <h2 style={centerH2}>Oups, cette page n&apos;exite pas</h2>
        <img src="./images/batman.png" alt="error page" />
      </div>
    </div>
  );
}
export default ErrorPage;
