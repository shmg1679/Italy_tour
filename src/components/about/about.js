import React from 'react';
import "./about.scss";
import landmark1 from "./aboutImg/landmark1.jpg";
import landmark2 from "./aboutImg/landmark2.jpg"
import landmark3 from "./aboutImg/landmark3.jpg";

function about() {

    
  return (
  <div>


<div className="about-landmark">
        <h1>Landmarks in Italy</h1>

      <div className="row">
        <div className="column">
          <div className="card">
            <img id ="pic"  src={landmark1} alt="Jane"/>
            <div className="container">
              <h2>Colosseum</h2>
              <p className="title">Rome, Italy</p>
              <p className="description">The Colosseum is regarded as a main symbol of the city and is one of the most-visited and famous historical landmarks in Italy. Emperor Vespasian commissioned the Colosseum in 72 AD; however, his son Titus completed it in 80 AD.

                <br/><br/>Even though the landmark has been continuously used for over 1900 years, the structure is still well preserved. <br/>It was added to UNESCO's list of World Heritage Sites in 1980.
                
                <br/><br/>Some of the features you must see when you visit this historic site include The Arch of Constantine, The Hypogeum, and The Bronze Cross. Visiting the Colosseum gives you an idea of how life was during the Roman Empire.</p>
                
                </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img id ="pic" src={landmark2} alt="Mike" />
            <div className="container">
              <h2>Roman Forum</h2>
              <p className="title">Rome, Italy</p>
              <p className="description">The Roman Forum is adjacent to Palatine Hill, so you can easily walk from one historical site to another, but they have separate entrances.
                <br/><br/>If you have watched Roman movies like the Gladiator and Spartacus, you have probably noticed that some of the major scenes are centred around this historic area.

                <br/><br/>According to history, the rise and fall of the Roman Empire started here. Taking your time walking around the Roman Forum introduces you to how the Roman Empire was founded.
                
                <br/><br/>Insider tip: The Roman Forum, Palatine Hill and the Colosseum are all located in the same archaeological park. So set aside about half a day or a full day to explore all three attractions properly.
                
                </p>
            </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img id ="pic" src={landmark3} alt="John" />
            
            <div className="container">
              <h2>Piazza Navona</h2>
              <p className="title">Rome, Italy</p>
              <p className="description">Piazza Navona, translated into English as Navona Square, was initially built as a sporting stadium by Emperor Domitian in 86 BC. The once-popular sporting stadium was later converted into what you see today, a public square, but maintaining its oval shape.

                <br/><br/>The Square is one of the liveliest places you can be in Rome and is a must for your one day in Rome itinerary. It is filled with many incredible attractions, like a beautiful church, Bernini sculptures, a cast of street artists, and elaborate fountains.
                <br/><br/>You can locate the Sant'Agnese in Agone Church west of the public square. It was commissioned by Pope Innocent X and designed by Borromini.
                </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <div className='famous-food'>
      <h2>Famous Foods in Italy</h2>
      <div className="famousFoodRow">
       

        <div className='center border-hover'>
        <h3>Pesto alla Genovese</h3>
        <img className= 'foodImg' src="https://img.apmcdn.org/0e4435c2e116941cafc74410f7419e47d1de860c/uncropped/84dad5-splendid-table-470822257.jpg"/>
        <p className='textCenter'><br/> This is an authentic Genoese  pesto made with  basil, garlic, pine nuts, and both Parmesan cheese & Pecorino cheese. Yum ! Yum!!<br/><br/></p>
        </div>
        <div className='center border-hover'>
        <h3>Befana Cake</h3>
          <img className= 'foodImg' src="http://www.eataly.com/wp/wp-content/uploads/2015/12/Panettone.jpg
"/>
              <p className='textCenter'><br/>A cake with a large dried bean inside. Whoever gets the bean in 
                their slice will be king/queen for the day.<br/><br/> 
              </p>
        </div>

    </div>

      
    <h2>Festivals</h2>
      <div className="famousFoodRow">
      <div className='center border-hover'>
      <h3>The Epiphany</h3>
      <img className="foodImg" src="https://wineandtravelitaly.com/wp-content/uploads/2020/01/La-Befana.jpg"/>


      <p className='textCenter'><br/>Epiphany marks the end of the Christmas period 
        and celebrates the birth of Jesus. In italian folklore, 
        Befana is an old soot-covered woman or witch who delivers 
        presents to Italian children on the night before Epiphany eve. 
        This is because the Magi ( three wise men ) were on their way to 
        see baby jesus with gifts. They asked if she would like to join. 
        At first she refused, but later changed her mind and tried to look 
        for him. Since she never found him, she gave the presents to other 
        children.To this day, she travels on her broomstick every year on 
        January 5th looking for the manger and giving her presents to any 
        Italian child who leaves out a shoe or hangs up a stocking on Epiphany 
        Eve.<br/><br/>  
      </p>
      </div>
      <div className='center border-hover'>
              <h3>Carnevale(Mardi Gras)</h3>
              <img className='foodImg' src="https://www.marthasitaly.com/images/264.jpg"/>

                  <p className='textCenter'>
                    <br/>
                    Mardi Gras or fat Tuesday is a Carnival celebration, reflecting
                    the practice of the last night of eating rich, fatty foods before 
                    the ritual Lenten sacrifices and fasting of the Lenten season.
                  </p>
    </div>
    </div>
    </div>

      
  </div>
  );
}

export default about;

