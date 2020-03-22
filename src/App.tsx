import React from 'react';
import './app.css';
import './styles/animation.css';
import Nav from './components/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Home from "./pages/Home";
import Appbar from './components/Appbar';


const App = (props:any) => {

    return (
        <div className="App">
            <Router>
                <div>
                    <Appbar />
                    <Nav />
                    <Switch>
                        <Route path="/jobposting">
                            <div className="animated-frame" >
                                Job Search
                            </div>
                          </Route>

                        <Route path="/jobsearch">
                            <div>Job Search</div>
                        </Route>

                        <Route path="/chat">
                            <div>Chat</div>
                        </Route>

                        <Route path="/myaccount">
                            <div>My Account</div>
                        </Route>

                        <Route path="/">
                            <div className="animated-frame" >
                                <Home />
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;