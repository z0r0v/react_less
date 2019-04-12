import  React from "react";

class login extends React.Component {
    function login() {
        return (
            <div>
                <span>Login </span>
                <input style={{margin: "5px 0"}} type="text" placeholder="Enter you email or login"></input>
                <br/>
                <span>Password </span>
                <input style={{margin: "5px 0"}} type="password" placeholder="Enter you Password"></input>
                <br/>
                <button style={{
                    backgroundColor: "#44014c",
                    color: "#fff",
                    width: "150px",
                    height: "30px",
                    margin: "15px 0"
                }} type="submit">Login you account
                </button>
            </div>);
    }
}
export default login;