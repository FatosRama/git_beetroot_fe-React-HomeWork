import logo from './logo.svg';
import './App.css';
import './Lisbon/Lisbon.css'
import Lisbon from './Lisbon/Lisbon';
import Paris from './Paris/Paris'
import './Paris/Paris.css'
import Prishtina from './Prishtina/Prishtina';
import './Prishtina/Prishtina.css'
import Venice from './Venice/Venice';
import './Venice/Venice.css';
import Instanbul from './Instanbul/Instanbul';
import './Instanbul/Instanbul.css';
import Cairo from './Cairo/Cairo';
import './Cairo/Cairo.css';
import NewYork from './NewYork/NewYork';
import './NewYork/NewYork.css';
import NewDelhi from './NewDelhi/NewDelhi';
import './NewDelhi/NewDelhi.css';
import SanFrancisco from './SanFrancisco/SanFrancisco';
import './SanFrancisco/SanFrancisco.css';
import Tokyo from './Tokyo/Tokyo';
import './Tokyo/Tokyo.css';
import Sydney from './Sydney/Sydney';
import './Sydney/Sydney.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="App-container">
          <div className="App-title">
              <h1>CSS Weather Forecast</h1>
          </div>
          <div className="App-weather-table">
            <div className="App-weather-table-first">
              <Lisbon />
              <Paris />
              <Prishtina />
              </div>
              <div className='App-weather-table-second'>
              <Venice />
              <Instanbul />
              <Cairo />
              <NewYork />
              </div>
              <div className='App-weather-table-third'>
              <NewDelhi />
              <SanFrancisco />
              <Tokyo />
              </div>
              <div className='App-weather-table-fourth'>
              <Sydney />
              </div>
          </div>
          <div className="App-text">
              <p>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
          </div>
          </div>
      </main>
    </div>
  );
}

export default App;
