import React from 'react';
import "./home.scss";


function text() {
    document.getElementById('Free').innerText="*We are only paid enough to advertise! We are not a charity but an advertisement service made to voluntarily generate revenue for the Italian Government.*"}


function Home() {
  return (
<body className="containerHome">




<h3 className="slogan">The only country you'll ever want to visit, and the one you'll NEVER leave!</h3>

  <div className="welcome"><h5>Welcome to Italy!</h5>
      </div>

      
<br/>
<div>
        <button className="button" id="Free" onClick={text}> **Click to win a free ticket!** </button>
</div>
 




</body>
);
}

export default Home;
