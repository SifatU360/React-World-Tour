import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited);
    }


    const passWithParams = () => {
        handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={passWithParams}>Mark Visited</button> <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ?'I have visited this country.' : 'I want to visit.'}
            <hr />
            <CountryDetail
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;