import logo from './logo.svg';
import './App.css';
import './Lisbon/Lisbon.css'
import Lisbon from './Lisbon/Lisbon';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="App-container">
          <div className="App-title">
              <h1>CSS Weather Forecast</h1>
          </div>
          <div className="App-weather-table">
              <Lisbon />
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
