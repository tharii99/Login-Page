import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Logpage from './Components/Login';
// import Aftersign from './Components/Aftersign';
import Dashboard from './Components/Dashboard';


const HelloWorld = () => {
    const [token, setToken] = useState();

    if (!token) {
        return <Logpage setToken={setToken} />
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
            </Routes>
        </Router>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

