import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Comment from './Posts/Comment';

const BasicRoute = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to='/home'>Home 2</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/post/:postId'>
                        <Comment />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default BasicRoute;