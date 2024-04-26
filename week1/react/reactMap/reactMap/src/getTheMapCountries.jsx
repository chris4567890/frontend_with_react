import React, { useState, useEffect } from 'react';
import SvgComponent from './mapthing';

 function CountryInfoComponent(){
    const [country,setCountry] = useState();
    function countryevent(event){
        
        fetch('https://restcountries.com/v3.1/alpha/'+event.target.id,{
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setCountry(data[0]))
        .catch(error => console.log("failed to get your country sorry"))

        return(
            <div>
                <SvgComponent/>
                <p>country : {country.name.commen}</p>
                <p>population : {country.population}</p>
                <p>area : {country.area}</p>
                <p>borders: {country.borders}</p>
            </div>
        )
    };
}


export { CountryInfoComponent };