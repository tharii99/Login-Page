import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import './index.css';
import Logpage from './Components/Logpage';


const HelloWorld = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Logpage />}></Route>
            </Routes>
        </Router>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

