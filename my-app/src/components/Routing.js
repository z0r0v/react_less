import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function login() {
    return (
    <div>
        <span>Login </span>
        <input style={{margin:"5px 0"}} type="text" placeholder="Enter you email or login"></input>
        <br/>
        <span>Password </span>
        <input style={{margin:"5px 0"}} type="password" placeholder="Enter you Password"></input>
        <br/>
        <button style={{backgroundColor:"#44014c", color:"#fff", width:"150px", height: "30px", margin:"15px 0"}} type="submit">Login you account</button>
    </div>);
}

function register() {
    return(  <div>
        <span>Enter you email </span>
        <input style={{margin:"5px 0"}} type="text" placeholder="Enter you email"></input>
        <br/>
        <span>Create password </span>
        <input style={{margin:"5px 0"}} type="password" placeholder="Enter you Password"></input>
        <br/>
        <span>Confirm password </span>
        <input style={{margin:"5px 0"}} type="password" placeholder="Confirm you Password"></input>
        <br/>
        <button style={{backgroundColor:"#44014c", color:"#fff", width:"150px", height: "30px",  margin:"15px 0"}} type="submit">Create account</button>
    </div>);
}

function profile() {
    return (
        <div>
        <span>Сhange your content </span>
            <br/>
        <input style={{margin:"10px 0"}} type="text" placeholder="Enter your content here" style={{width:"350px", height: "150px",}}></input>
            <br/>
        <button style={{backgroundColor:"#44014c", color:"#fff", width:"150px", height: "30px",  margin:"15px 0"}} type="submit">Apply</button>
        </div>);
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
                            <Link to="/register/">Register</Link>
                        </li>
                        <li>
                            <Link to="/profile/">Profile</Link>
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