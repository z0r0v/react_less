import  React from "react";

const btn = {
    background:'#800080',
    width:'250px',
    height:'30px',
    color:'#FFFFFF'
}

    function login() {
        return (
            <div>
                <span>Login </span>
                <input type="text" placeholder="Enter you email or login" /><br/>
                <span>Password </span>
                <input  type="password" placeholder="Enter you Password" /><br/>
                <button style={btn} type="submit">Login you account</button>
            </div>
        );
    }
export default login;