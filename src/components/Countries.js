import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Countries</h2>
      <div className="row">
        {countries.map(country => (
          <div className="col-md-4 mb-4" key={country.cca3}>
            <div className="card">
              <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                <Link to={`/countries/${country.cca3}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
