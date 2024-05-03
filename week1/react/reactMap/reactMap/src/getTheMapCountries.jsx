import React, { useState, useEffect } from 'react';
import SvgComponent from './mapthing';

 function countryInfoComponent(){
    const [country,setCountry] = useState();
    
    return(
        <div>
            <SvgComponent/>
            
        </div>
    )
}
function countryevent(event){
        
    fetch('https://restcountries.com/v3.1/alpha/'+event.target.id,{
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => setCountry(data[0]))
    .catch(error => console.log("failed to get your country sorry"))

    
};

export default countryInfoComponent ;