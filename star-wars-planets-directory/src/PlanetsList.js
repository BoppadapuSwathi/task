import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/?format=json');
  }, []);

  const fetchPlanets = async (url) => {
    const response = await axios.get(url);
    setPlanets(response.data.results);
    setNextPage(response.data.next);
    setPrevPage(response.data.previous);
  };

  const handleNextPage = () => {
    fetchPlanets(nextPage);
  };

  const handlePrevPage = () => {
    fetchPlanets(prevPage);
  };

  return (
    <div className="planets-list">
      {planets.map(planet => (
        <PlanetCard key={planet.url} planet={planet} />
      ))}
      <Pagination prevPage={handlePrevPage} nextPage={handleNextPage} />
    </div>
  );
};

export default PlanetsList;