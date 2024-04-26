import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//import SvgComponent2  from './mapthing.jsx';
import { CountryInfoComponent } from './getTheMapCountries.jsx';
import SvgComponent from './mapthing.jsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            
            <CountryInfoComponent />
        </>
    );
}

export default App;
