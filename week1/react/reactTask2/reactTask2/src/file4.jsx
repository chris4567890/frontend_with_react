import React, { useState, useEffect } from 'react';

export function DadJokeComponent(){
    const [joke,setJoke] = useState(0);
    function getTheDadJake(){
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setJoke(data.joke))
        .catch(error => console.error('Failed to fetch dad joke', error));
    }

    useEffect(() => {
        let timerId = setInterval(() => getTheDadJake(),10000);
        return() => {
            clearInterval(timerId);
        }
        
    }, []); 

    
    return (
        <div>
            <p>{joke}</p>
            <button id="generator" onClick={getTheDadJake}>generate the best joke</button>
        </div>
    );
}

function JokeComponent() {
    
    const [joke, setJoke] = useState(0);

    

    function getTheJoke(){
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));        
    }

    
    useEffect(() => {
        getTheJoke();
        
    }, []); 
    return (
        <div>
            <p>{joke}</p>
            <button id="generator" onClick={getTheJoke}>generate chuck norris meme joke</button>
        </div>
    );
}

export default JokeComponent;
