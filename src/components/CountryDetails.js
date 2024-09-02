import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => response.json())
      .then(data => setCountry(data[0]));
  }, [code]);

  if (!country) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={country.name.common} style={{ width: '200px' }} />
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
    </div>
  );
};

export default CountryDetails;
