import { useState } from 'react';
import './App.css';
import daytime from './assets/daytime.jpg';
import night from './assets/night.jpg';


function App() {

  const [backgroundImg, setBackgroundImg] = useState('night');

  return (
    <div className="App" style={ backgroundImg === 'night' ? backgroundNight : backgroundDay }>
      
    </div>
  );
}

const backgroundNight = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${night})`,
  backgroundSize:'100vw 100vh',
  backgroundRepeat:"no-repeat"
}

const backgroundDay = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${daytime})`,
  backgroundSize:'100vw 100vh',
  backgroundRepeat:"no-repeat"
}

export default App;
