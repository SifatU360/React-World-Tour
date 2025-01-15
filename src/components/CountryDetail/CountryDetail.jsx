import CountryData from "../CountryData/CountryData";

const CountryDetail = ({handleVisitedFlags, country, handleVisitedCountry}) => {
    return (
        <div>
            <h4>Country Details</h4>

            <hr />
            <CountryData
                handleVisitedFlags = {handleVisitedFlags}

                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;