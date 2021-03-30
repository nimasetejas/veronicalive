import React from 'react';
import './App.css';
import {routes} from "./routes";
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-web-tabs/dist/react-web-tabs.css";

import history from "./utils/history";
import NavBar from "./screens/NavBar";
import { BrowserRouter } from "react-router-dom";



function App() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component}
                                                                          key={key}/>);

    return <Router><NavBar/>{routeComponents}</Router>
}

export default App;
