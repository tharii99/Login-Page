import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Logpage from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Provider } from 'react-redux';
import  store  from '../src/store';


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

ReactDOM.render(<Provider store={store}><HelloWorld /></Provider>, document.getElementById("root"));

