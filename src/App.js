import React, { useState } from 'react';
import './App.css';
import BtnComponent from './components/btnComponent';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 59, m: 25, desc: 5 });
  const music = new Audio('./sounds/ES_Stinger Magical - SFX Producer.mp3');

  var updateMs = time.ms, updateS = time.s, updateM = time.m, updateDesc = time.desc;
  const runTask = () => {
     if (updateMs === 100) {
       updateS--;
       updateMs = 0;
     }
     if (updateS === 0 && updateM !== 0){
        updateM--;
        updateS = 59;
     }
     if (updateM === 0 && updateS === 0 && updateDesc != 0){
        music.play();
       updateDesc--;
       updateS = 59;
       //music.pause();
     }
  }

  return (
    <div className="App">
      <BtnComponent time={time}/>
    </div>
  );
}

export default App;