import React, { useState } from 'react';
import axios from 'axios';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  const fetchResidents = async () => {
    const promises = planet.residents.map(residentUrl => axios.get(residentUrl));
    const responses = await Promise.all(promises);
    const residentsData = responses.map(response => response.data);
    setResidents(residentsData);
  };

  const backgroundImage = {
    backgroundImage: `url('/images/planets/${planet.name.toLowerCase()}.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="planet-card" style={backgroundImage}>
      <div className="planet-info">
        <h2>{planet.name}</h2>
        <p>Climate: {planet.climate}</p>
        <p>Population: {planet.population}</p>
        <p>Terrain: {planet.terrain}</p>
        <button onClick={fetchResidents}>Show Residents</button>
      </div>
      <div className="residents-list">
        {residents.map(resident => (
          <div key={resident.url} className="resident">
            <p>Name: {resident.name}</p>
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetCard;
