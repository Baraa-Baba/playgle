import React, { useState } from 'react';   
import './SearchCountry.scss'
const countries = ['USA', 'India', 'UK', 'Australia', 'Japan', 'Germany'];

function SearchCountry() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSearch = (event) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="search-country">
      <div className="selected-country" onClick={toggleDropdown}>
        {selectedCountry ? selectedCountry : 'Select a country'}
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          <input
            className="search-input"
            type="text"
            placeholder="Search for a country"
            onChange={handleSearch}
          />
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {filteredCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      )}
     
    </div>
  );
}

export default SearchCountry;
