import React from 'react';
import './App.css';
import PlanetsList from './PlanetsList';

function App() {
  return (
    <div className="App">
       <div className="stars"></div> {/* Stars container */}
       <header>
        <h1 className="flip-text"> Star Wars Planets Directory</h1> </header>



     <PlanetsList />
    </div>
  );
}

export default App;
