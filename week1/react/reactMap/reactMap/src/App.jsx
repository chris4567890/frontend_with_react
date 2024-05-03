import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//import SvgComponent2  from './mapthing.jsx';
import  countryInfoComponent  from './getTheMapCountries.jsx';
import SvgComponent from './mapthing.jsx';

function App() {
    const [countryInfoComponent1, setCount] = useState(0);

    return (
        <>
              
            <countryInfoComponent />
        </>
    );
}

export default App;
