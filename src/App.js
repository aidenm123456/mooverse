import { useState } from 'react';
import './App.css';
import daytime from './assets/daytime.jpg';
import night from './assets/night.jpg';


function App() {

  const [backgroundImg, setBackgroundImg] = useState('day');


  return (
    <div className="App" style={ backgroundImg === 'night' ? backgroundNight : backgroundDay }>
      <div style={topRow}>

        <div style={topLeft}>
          <button>Docs/Litepaper</button>
        </div>

        <div style={topRight}>
          <button>Connect Metamask</button>
        </div>

      </div>
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

const topRow = {
  display: 'flex',
  width: '100vw'
}

const topLeft = {
  display: 'flex',
  width: '50%',
  justifyContent:'start',
}

const topRight = {
  display: 'flex',
  width: '50%',
  justifyContent:'end',
}

export default App;
