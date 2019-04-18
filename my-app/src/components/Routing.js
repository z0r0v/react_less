import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import login from "./login";
import register from "./register";
import profile from "./profile";
import UserSession from "../UserSession";
import "../App.css";
import { withRouter } from "react-router";

let session = new UserSession()


const AuthButton = withRouter(
    ({ history }) =>

        !session.isValid() ?
            (
                <NavLink className="linkDecor" to="/login/" activeClassName="inBtnNavi">
                    <button className="btnNavi">
                        Login
                    </button>
                </NavLink>
            )
            :
            (
                <button className="btnNavi" onClick={() => {
                    session.clear();
                    history.push("/");
                }}>
                    Logout
                </button>
            )
);

const Nav = withRouter(({history}) => <nav>
    <ul className="StlUl">
        <li>
            <AuthButton/>
        </li>
        {
            !session.isValid() ?
                (
                    <li>
                        <Link className="linkDecor" to="/register/">
                            <button className="btnNavi">
                                Register
                            </button>
                        </Link>
                    </li>
                )
                :
                (
                    <li>
                        <Link className="linkDecor" to="/profile/">
                            <button className="btnNavi">
                                Profile
                            </button>
                        </Link>
                    </li>
                )
        }
    </ul>
</nav>);

function AppRouter(props) {

    return (
        <Router>
            <div className="DivStl">
                <Nav/>

                <Route path="/login/" exact component={login}/>
                <Route path="/register/" component={register}/>
                <Route path="/profile/" component={profile}/>
            </div>
        </Router>
    );
}
export default AppRouter;