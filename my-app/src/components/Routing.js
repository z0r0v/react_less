import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import login from "./login";
import register from "./register";
import profile from "./profile";
import UserSession from "../UserSession";
import "../App.css";

let session = new UserSession()

function AppRouter(props) {
    return (
        <Router>
            <div className="DivStl">
                <nav>
                    <ul className="StlUl">
                        <li>
                            {
                                !props.isLoggined ? /*Поменяли мместами ибо нам нужно наоборот*/
                                (
                                    <Link className="linkDecor" to="/login/">
                                        <button className="btnNavi">
                                            Login
                                        </button>
                                    </Link>
                                )
                                 :
                                    (
                                        <button className="btnNavi" onClick={
                                            session.clear
                                        }>
                                            Logout
                                        </button>
                                    )
                            }

                        </li>
                        <li>
                            {
                                !props.isLoggined &&
                                (
                                    <Link className="linkDecor" to="/register/">
                                        <button className="btnNavi">
                                            Register
                                        </button>
                                    </Link>
                                )
                            }
                        </li>
                        <li>
                            {
                                props.isLoggined &&
                                (
                                    <Link className="linkDecor" to="/profile/">
                                <button className="btnNavi">
                                Profile
                                </button>
                                </Link>
                                )
                            }
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