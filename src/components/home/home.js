import React from 'react';
import "./home.scss";

function text() {
    document.getElementById('Free').innerText="We're only paid enough to advertise!"}

function Home() {
  return (

      
<div>
 

  <div className="welcome"><h6>Welcome to Italy!</h6></div>

  <div className="slogan">The only country you'll ever want to visit, and the one you'll NEVER leave</div>

  <p>
             <button className="button" id="reveal" onClick={text}> **Click to win a free ticket!** </button>
  </p> 
  
 



</div>
);
}


export default Home;


