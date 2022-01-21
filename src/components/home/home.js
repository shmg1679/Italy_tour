import React from 'react';
import "./home.scss";

function text() {
    document.getElementById('Free').innerText="We're only paid enough to advertise!"}

function Home() {
  return (

      
<div>
 

  <div className="welcome"><h5>Welcome to Italy!</h5>
    <h3>The only country you'll ever want to visit, 
  and the one you'll NEVER leave</h3>  </div>

<br/>



  <div>
             <button className="button" id="reveal" onClick={text}> **Click to win a free ticket!** </button>
  </div> 
  
 



</div>
);
}


export default Home;


