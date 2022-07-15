import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logpage from './Components/Logpage';


const HelloWorld = () => {
    return (
        <Logpage />
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

