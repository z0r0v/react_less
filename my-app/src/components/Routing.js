import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function login() {
    return (
    <div>
        <span>Login</span><input type="text" placeholder="Enter you email or login"></input><br/>
        <span>Password</span><input type="password" placeholder="Enter you Password"></input>
    </div>);
}

function register() {
    return <h2>register</h2>;
}

function profile() {
    return <h2>profile</h2>;
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login/">Login</Link>
                        </li>
                        <li>
                            <Link to="/register/">register</Link>
                        </li>
                        <li>
                            <Link to="/profile/">profile</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/login/" exact component={login} />
                <Route path="/register/" component={register} />
                <Route path="/profile/" component={profile} />
            </div>
        </Router>
    );
}

export default AppRouter;