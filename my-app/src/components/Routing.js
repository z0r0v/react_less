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

const btnNavi = {
    backgroundColor:'#800080',
    display:'inlaine-block',
    width:'250px',
    marginRight:'37px'

}

const linkDecor = {
    color:'#ffff',
    textDecoration:'none',
}

function AppRouter() {
    return (
        <Router>
            <div style={DivStl}>
                <nav>
                    <ul style={StlUl}>
                        <li>
                            <button style={btnNavi}>
                                <Link style={linkDecor} to="/login/">
                                    Login
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button style={btnNavi}>
                                <Link style={linkDecor} to="/register/">
                                    Register
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button style={btnNavi}>
                                <Link style={linkDecor} to="/profile/">
                                    Profile
                                </Link>
                            </button>
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