import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import login from "./login";
import register from "./register";
import profile from "./profile";

const StlUl = {
    listStyleType: "none",
}
const DivStl = {
    textAlign:'center',
}

function AppRouter() {
    return (
        <Router>
            <div style={DivStl}>
                <nav>
                    <ul style={StlUl}>
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